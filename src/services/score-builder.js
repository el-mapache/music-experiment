import noteFactory from 'services/note-factory';
import audioChannel from 'services/audio-channel';
import NOTE_VALUES from 'services/note-values';

// Super naive at this point, just for testing purposes
const phrygianMap = ['E', 'F', 'G', 'A', 'B', 'C', 'D'];

/**
 * Returns a note in the supplied scale and the note's octave
 * as a string
 * 
 * @param {Array} scale list of note names as a string
 * @param {Number} octaveMin minimum potential octave of the note
 * @param {Number} octaveMax Maximum potential octave of the note
 * @param {Number} notePosition Which note to pull from the scale
 */
const getNoteAndOctave = (scale, octaveMin, octaveMax, notePosition) => {
  const octaveRange = Math.random() * (octaveMax - octaveMin) + octaveMin;
  const octave = Math.floor(octaveRange);

  return `${scale[notePosition]}${octave}`;
};

const makeChords = data =>
  data.reduce((chord, datum) => {
    const { days, count } = datum;
    const chordData = {};

    if (count) {
      chordData.notes = days.reduce((notes, el, index) => {
        if (el) {
          notes.push(
            getNoteAndOctave(phrygianMap, 5, 3, index)
          );
        }

        return notes;
      }, []);
    } else {
      chordData.notes = [0];
    }

    chordData.volume = count / 10;
    chord.push(chordData);

    return chord;
  }, []);


const generateNoteSequence = (chordsFromData) => {
  const channel = audioChannel();

  return chordsFromData.reduce((sequence, chordObj) => {
    const { notes, volume } = chordObj;
    const chord = notes.map((noteName) => {
      const peak = volume;

      return noteFactory({ noteName, peak });
    });

    channel.add(chord);

    sequence.push(
      chord.map(node => ({
        node,
        noteType: NOTE_VALUES.QUARTER, 
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
