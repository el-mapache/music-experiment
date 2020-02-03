import noteFactory from 'factories/note-factory';
import audioChannel from 'services/audio-channel';
import Chord from 'services/chord';
import NOTE_VALUES from 'types/note-values';
import NOTE_BEAT_VALUES from 'types/note-beat-values';

// Super naive at this point, just for testing purposes
// Random thought: should I rearrange the order of these notes periodically?
const phrygian = ['E', 'F', 'G', 'A', 'B', 'C', 'D'];

// every measure will have n beat sequences
// ex. 3/4 will have 3, each with an availble beat of 1
// ex. 6/8 will have 2, each with an available beat count of 3
// class BeatSequence {
//   constructor({ totalBeats }) {
//     this.totalBeats = totalBeats;
//     this.availableBeats = totalBeats;

//     this.beats = [];
//   }

//   add(beat) {
//     const { beatLength } = beat;
//     if (beatLength > this.availableBeats) {
//       // carryover
//     } else {
//       this.beats.push(beat);
//       this.availableBeats -= beatLength;
//     }
//   }
// }

/**
 * new algorithm idea to place notes:
 * either need to add dots, or 'ties', ie create the next measure with fewer
 * beats, and pass that new measure into the next measure generation function
 * !no!   this is too muchhhhhh.
 * 
 * measure
 *  properties
 *    timeSignature object
 *    beatSequence - main beat sequence
 *      each beat sequence has additional beat sequences?
 *  
 */

class Meter {
  /**
   * meter = new Meter([6,8]) =>
   * 
   * There are three quarter notes in a single measure of 6/8
   * 
   * meter.quarterNotesPerMeasure
   * >> 3
   * 
   * However, 6/8 is a compound duple meter, meaning there are only 2 beats
   * 
   * meter.beatCount
   * >> 2
   * 
   * To represent 3 quarter notes, we need a dotted quarter, since a quarter note (1)
   * and a dot (.5) make 1.5, and 1.5 * 2 = 3
   * 
   * meter.beatLength
   * >> 1.5
   * 
   * Each measure should be subdivided into beats. and each of those beats
   * should be further subdivided into the notes needed to add up to
   * that number of beats
   * 
   */
  constructor({ timeSignature = [4, 4] }) {
    this.numerator = timeSignature[0];
    this.denominator = timeSignature[1];
    this.quarterNotesPerMeasure = 4 * (this.numerator / this.denominator);
    this.beatCount = this.getBeatCount();
    this.beatLength = this.quarterNotesPerMeasure / this.beatCount;
  }

  getBeatCount() {
    switch(this.numerator) {
      case 6:
        return 2;
      case 2:
      case 3:
      case 4:
        return this.numerator;
    }
  }
}

// class TimeSignature {
//   constructor({ signature = [4, 4] }) {
//     this.beatsPerMeasure = signature[0];
//     this.baseBeatType = beatMap[signature[1]];
//   }
// }

// class MeasureBeat {
//   constructor({ name }) {
//     this.name = name;
//     this.beatLength = null;
//   }
// }

class Measure {
  constructor({ meter, availableBeats = null }) {
    this.meter = meter
    /**
     * This could be technically incorrect if we were generating a visual
     * score. In a compound meter, string beats are broken up by dotted notes
     * e.g. in 6/8 time, there are 3 quarter notes worth of eighth notes
     * in each measure, but they would be expressed on the page as two
     * dotted quarter notes.
     * 
     * However, since we don't need to represent the score visually, and we aren't
     * doing anything with strong/weak beats at the moment, we can express the total
     * available beats of a measure in absolute quarter note terms.
     */
    this.totalBeats = this.meter.quarterNotesPerMeasure;
    this.availableBeats = availableBeats || this.totalBeats;
    this.beats = [];
  }

  updateAvailableBeats(beatLength) {
    const nextbeatLength = this.availableBeats - beatLength;

    this.availableBeats = nextbeatLength < 0 ? 0 : nextbeatLength;
  }
}


// I think we need the timing information here.
// we need to keep a total of the note values in each measure, and if the next note
// would be greater than the available beats in the measure, we have to add a rest.
/**
 * 
 */
/**
 * basically i need to be able to:
 * 
 * class Measure
 *    this.totalBeats = baseBeatsPerMeasure
 *    this.availableBeats = this.totalBeats
 *    this.beats = [];
 * 
 *    add(soundUnit)
 *      this.beats.push(soundUnit)
 *      this.availableBeats -= soundUnit.length;
 *    
 * 
 * 
 * let measure = new Measure(totalBeats);
 * for each sound unit -> 
 *  if measure.availableBeats >= getRealBeatLength(soundUnit)
 *    measure.add(soundUnit)
 *  else
 *    measure.add(rests that take up all remaining available beats)
 *    measures.push(measure);
 *    measure.length = 0;
 *    measure.add(soundUnit)
 * 
 *  getRealBeatLength (soundUnit, baseBeatLength) ->
 *    get sound unit type
 *    if it equals baseBeatLength
 *      returnbeatLength = 1
 *   else if it doesnt equal baseNoteLength
 *     beatLength = value out of timing map (maybe do this anyway)
 *
 *  
*/

const buildMeasures = (soundUnits, timeSignature = [6, 8]) => {
  const [ beatsPerMeasure, baseNoteLength ] = timeSignature;
  const safeSoundUnits = soundUnits.slice();
  const meter = new Meter({ timeSignature });
  let measure;
  let carryoverBeats = null;
  let measures = [];

  safeSoundUnits.forEach((chord) => {
    const beat = chord[0];

    if (!measure) {
      measure = new Measure({ meter, availableBeats: carryoverBeats });
      carryoverBeats = null;
    }

    const { beatLength } = beat;
    
    if (beatLength > measure.availableBeats) {
      carryoverBeats = beatLength - measure.availableBeats;
    } 
      
    measure.updateAvailableBeats(beatLength);
    measure.beats.push(beat);

    if (!measure.availableBeats) {
      measures.push(measure);
      measure = null;
    }
  });


  return measures;
};

const addNoteModifier = (value) => {
  if (value < 50) {
    return '';
  } else if (value > 50 && value < 60) {
    return '#';
  } else {
    return 'b';
  }
};

const defaultNoteDuration = (timeSignature) => {
  const baselineDuration = timeSignature[1];

  switch(baselineDuration) {
    case 2:
      return NOTE_VALUES.HALF;
    case 4:
      return NOTE_VALUES.QUARTER;
    case 8:
      return NOTE_VALUES.EIGHTH;
    default:
      return NOTE_VALUES.QUARTER;
  }
};

// this need to be based on the time signature too, otherwise
// we end up with 6/8 time signature and a bunch of whole notes
// TODO FIX THIS CAUSE THIS IS THE MISSING PIECE ATM
const selectNoteValue = (speed, timeSignature = [4,4]) => {

  let value = defaultNoteDuration(timeSignature);

  if (speed < 2) {
    value = NOTE_VALUES.WHOLE;
  } else if (speed > 2 && speed < 10) {
    value = NOTE_VALUES.HALF;
  } else if (speed > 10 && speed < 40) {
    value = NOTE_VALUES.QUARTER;
  } else if (speed > 40) {
    value = NOTE_VALUES.EIGHTH;
  }

  return value;
};

// Chord is sort of a misnomer here. It can be a single note, a group
// of notes, or a silence. The chord refers more to a discrete
// unit of musical activity
const makeChords = data =>
  data.reduce((chords, datum) => {
    // TODO why is datum count undefined?
    console.log(datum)
    const { days, count } = datum;
    const chord = new Chord({
      volume: count / 100,
      scale: phrygian,
    });
    
    chord.addNotes(days);
    chords.push(chord);

    return chords;
  }, []);

const generateSequence = (chordsFromData) => {
  const channel = audioChannel();

  const finalNotes = chordsFromData.reduce((sequence, chordObj) => {
    const { notes, volume, speed } = chordObj;

    const chord = notes.map((note) => {
      const peak = !note ? 0.001 : volume;

      return noteFactory({
        noteName: note,
        peak: (peak / notes.length),
      });
    });

    channel.add(chord);
    
    sequence.push(
      chord.map((node) => {
        const noteType = selectNoteValue(speed);
        return {
          node,
          noteType,
          beatLength: NOTE_BEAT_VALUES[noteType],
        };
      })
    );
    
    return sequence;
  }, []);
  console.log('final notes', finalNotes);
  console.log('measures',   buildMeasures(finalNotes));
  return finalNotes;
};

// should be renamed to build sequence!
const buildScore = (data, timeSignature) =>
  generateSequence(
    makeChords(data)
  );

export default buildScore;
