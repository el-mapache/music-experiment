import noteFactory from 'factories/note-factory';
import audioChannel from 'services/audio-channel';
import Chord from 'services/chord';
import NOTE_VALUES from 'types/note-values';
import NOTE_BEAT_VALUES from 'types/note-beat-values';
import SCALES from 'types/scales';
import Measure from 'models/measure';
import Meter from 'models/meter';

const MAX_VOLUME = 95;
const WEB_AUDIO_ZERO = .0001;

// Super naive at this point, just for testing purposes
// Random thought: should I rearrange the order of these notes periodically?
const phrygian = SCALES.PHRYGIAN;

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
const getNoteValue = (speed, timeSignature = [4,4]) => {

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
    const { days, count } = datum;
    const chord = new Chord({
      volume: Math.min(count, MAX_VOLUME) / 100,
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
      const peak = !note ? 0.001 : volume / notes.length;

      return noteFactory({
        noteName: note,
        peak: (peak / notes.length),
      });
    });

    channel.add(chord);
    
    sequence.push(
      chord.map((node) => {
        const noteType = getNoteValue(speed);
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

/**
 * 
 * @param {Array} repoCommitStats Objects representing a week's worth of commits
 * @param {Array} timeSignature 
 */
const buildScore = (repoCommitStats, timeSignature) => {
  const noteGroups = makeChords(repoCommitStats);
  return generateSequence(noteGroups);
};

export default buildScore;
