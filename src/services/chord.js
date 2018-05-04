// now not sure about this abstraction. do i also need a note?
// probably, that could be the composed series of functions that
// gets the octave, note name and any modifiers like sharps/flats/accents,
// or ties?
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

  return `${scale[notePosition]}${''}${octave}`;
};

class Chord {
  constructor({ volume, scale }) {
    this.speed = 0;
    // maybe i can randomly assign these volumes so
    // like, a single note can randomly have either a higher volume
    // or not, basically an accent?
    this.volume = volume;
    this.notes = [];
    this.scale = scale;
  }

  // TODO: this assumes collection of data in 7 day format,
  // which I dont love
  addNotes(data) {
    this.notes = data.reduce((notes, el, index) => {
      if (el) {
        notes.push(
          getNoteAndOctave(this.scale, 7, 3, index),
        );
      }

      if (el > this.speed) {
        this.speed = el;
      }

      return notes;
    }, [0]);
  }
}

export default Chord;
