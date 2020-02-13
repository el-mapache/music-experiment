import { getNoteTimings } from 'services/timing';
/**
 * @class Meter
 * 
 * @description Basics of computing beats for a given time signature
 * meter = new Meter([6,8]) =>
 * 
 * There are three quarter notes in a single measure of 6/8
 * 
 * @example
 * meter.quarterNotesPerMeasure
 * >> 3
 * 
 * However, 6/8 is a compound duple meter, meaning there are only 2 beats
 * Beats are always expressed as a function of the numerator
 * @example
 * 
 * numerator = 6
 * 
 * meter.beatsPerBar >> 2
 * 
 * To represent 3 quarter notes, we need a dotted quarter, since a quarter note (1)
 * and a dot (.5) make 1.5, and 1.5 * 2 = 3
 * 
 * @example
 * meter.beatLength >> 1.5
 * 
 * Each measure should be subdivided into beats. and each of those beats
 * should be further subdivided into the notes needed to add up to
 * that number of beats
 * 
*/
class Meter {
  /**
   * @constructor
   * @param {Object} props
   * @params {Array} props.timeSignature 
   */
  constructor({ timeSignature = [4, 4], tempo = 120 }) {
    this.tempo = tempo;
    /**
     * @type {Number} 
    */ 
    this.numerator = timeSignature[0];
    /**
     * This determines what division of a whole note constitutes a single beat
     * @example
     * In 6/8 time, the 8 (one eigth note) is considered a single beat.
     * This is computable via the formula (beats / wholeNoteValue)
     * 
     * @type
     * {Number}
     */
    this.denominator = timeSignature[1];
    /**
     * @type Number
     */
    this.quarterNotesPerMeasure = 4 * (this.numerator / this.denominator);
    this.beatsPerBar = this.getBeatsPerBar();
    this.beatLength = this.quarterNotesPerMeasure / this.beatsPerBar;
    this.noteTiming = getNoteTimings(this.tempo, this.beatLength);
  }

  getBeatsPerBar() {
    switch(this.numerator) {
      case 6:
        return 2;
      case 2:
      case 3:
      case 4:
        return this.numerator;
    }
  }

  getTimeForNote(type) {
    return this.noteTiming[type];
  }
}

export default Meter;
