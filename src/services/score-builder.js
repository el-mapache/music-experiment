import noteFactory from 'services/note-factory';
import NOTE_VALUES from 'services/note-values';

// Super naive at this point, just for testing purposes
const phrygianMap = ['E', 'F', 'G', 'A', 'B', 'C', 'D'];

const makeChords = data =>
  data.reduce((chord, datum) => {
    const count = datum.reduce((total, element) => total + element, 0);
    const chordData = {};

    if (count) {
      chordData.note = datum.reduce((notes, el, index) => {
        if (el) {
          notes.push(`${phrygianMap[index]}${Math.floor(Math.random() * (5 - 3) + 3)}`);
        }

        return notes;
      }, []);
    } else {
      chordData.note = [0];
    }

    chordData.volume = count / 10;
    chord.push(chordData);

    return chord;
  }, []);

const generateNoteSequence = chordsFromData =>
  chordsFromData.reduce((sequence, chordObj) => {
    const chord = chordObj.note.map((noteName) => {
      return noteFactory({ noteName, peak: chordObj.volume });
    });

    sequence.push(
      chord.map(node => ({
        node,
        noteType: NOTE_VALUES.QUARTER, 
      }))
    );
    
    return sequence;
  }, []);

const buildScore = data => generateNoteSequence(makeChords(data));

export default buildScore;