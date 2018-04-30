import noteFactory from 'factories/note-factory';
import audioChannel from 'services/audio-channel';
import Chord from 'services/chord';
import NOTE_VALUES from 'types/note-values';

// Super naive at this point, just for testing purposes
// Random thought: should I rearrange the order of these notes periodically?
const phrygian = ['E', 'F', 'G', 'A', 'B', 'C', 'D'];

const addNoteModifier = (value) => {
  if (value < 50) {
    return '';
  } else if (value > 50 && value < 60) {
    return '#';
  } else {
    return 'b';
  }
}

const selectNoteValue = (speed) => {
  let value = NOTE_VALUES.QUARTER;

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

const makeChords = data =>
  data.reduce((chords, datum) => {
    const { days, count } = datum;
    const chord = new Chord({
      volume: count / 100,
      scale: phrygian,
    });
    
    chord.addNotes(days);
    chords.push(chord);

    return chords;
  }, []);

const generateNoteSequence = (chordsFromData) => {
  const channel = audioChannel();

  return chordsFromData.reduce((sequence, chordObj) => {
    const { notes, volume, speed } = chordObj;
    const chord = notes.map((note) => {
      const peak = volume;

      return noteFactory({
        noteName: note,
        peak: (peak / notes.length),
      });
    });

    channel.add(chord);
    
    sequence.push(
      chord.map(node => ({
        node,
        noteType: NOTE_VALUES.QUARTER//selectNoteValue(speed),
      }))
    );
    
    return sequence;
  }, []);
};

const buildScore = data =>
  generateNoteSequence(
    makeChords(data)
  );

export default buildScore;
