import { Tone } from 'factories/note-factory';
import Meter from 'models/meter';
import Chord from 'services/chord';
import NOTE_VALUES from 'types/note-values';

const MAX_VOLUME = .85;

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
      volume: Math.min(count, MAX_VOLUME) / 100
    });
    
    chord.addNotes(days);
    chords.push(chord);

    return chords;
  }, []);


// why am i mapping everything so many times
const buildNoteSequence = ({ commitStats, timeSignature, bpm }) => { 
  let startTime = 0;
  const meter = new Meter({ timeSignature, tempo: bpm });
  const chords = makeChords(commitStats);
  const toneClusters = chords.reduce((clusters, cluster) => {
    const { volume, speed } = cluster;
    const fractionalVolume = volume / cluster.notes.length;
    const noteType = getNoteValue(speed);

    cluster.notes = cluster.notes.map((note) => {
      const tone = new Tone({
        noteName: note,
        timing: meter.getTimeForNote(noteType),
        peak: fractionalVolume,
        noteType: noteType,
      });

      tone.addTimingInfo(startTime);
      startTime = tone.endTime;

      return tone;
    });

    clusters.push(cluster);

    return clusters;
  }, []);

  return {
    toneClusters,
    totalTime: parseFloat(startTime.toFixed(2))
  };
};

export default buildNoteSequence;
