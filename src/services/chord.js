import SCALES from 'types/scales';

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

/**
 * Represents an abstract container for a group of sounds.
 * It's purpose is to provide general information about the sounds are
 * arrayed at a particular point it time:
 * - their overall volume
 * - the scale from which the sounds are derived, and the resultant note names
 * - the speed of the slowest note. This is particularly important,
 * as it determines how long this cluster of tones will sound.
 * 
 * This class DOES NOT contain any information about the quality of the notes
 * it contains, beyond the raw note name. Actual note frequency and timing information
 * lives in the Note class
 */
class Chord {
  /**
   * @param {Object} props The properties this class accepts
   * @param {Number} props.volume The overall volume of the group of notes this object describes
   * @param {Array} props.scale The musical scale this group of tones pulls from, represented as a 7-element list
   * @returns Chord
   */
  constructor({ volume, scale = SCALES.PHRYGIAN }) {
    // Speed helps determine the length of the note. 0 -> slowest, 100 -> fastest
    this.speed = 0;
    // maybe i can randomly assign these volumes so
    // like, a single note can randomly have either a higher volume
    // or not, basically an accent?
    this.volume = volume;
    // Array of strings representing the note name in western English standard musical notation
    // @example E4
    this.notes = [];
    this.scale = scale;
    this.time = null;
  }

  get totalTime() {
    return this.time;
  }

  set totalTime(value) {
    this.time = value;
  }

  // TODO: this assumes collection of data in 7 day format,
  // which I dont love
  addNotes(data) {
    this.notes = data.reduce((notes, count, index) => {
      if (count) {
        notes.push(
          getNoteAndOctave(this.scale, 7, 3, index),
        );
      }

      this.speed = Math.max(count, this.speed);

      return notes;
    }, [0]);
  }
}

export default Chord;
