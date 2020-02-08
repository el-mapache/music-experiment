/**
 * @param {Object} props
 * @param {Meter} props.meter An instance of the Meter class
 * @param {Number} props.availableBeats How many beats we have available in this measure
 */
class Measure {
  constructor({ meter, availableBeats = null }) {
    this.meter = meter
    /**
     * This could be technically incorrect if we were generating a visual
     * score. In a compound meter, strong beats are broken up by dotted notes
     * e.g. in 6/8 time, there are 3 quarter notes worth of eighth notes
     * in each measure, but they would be expressed on the page as two
     * dotted quarter notes.
     * 
     * However, since we don't need to represent the score visually, and we aren't
     * doing anything with strong/weak beats at the moment, we can express the total
     * available beats of a measure in absolute quarter note terms.
     * @type {Number}
     */
    this.totalBeats = this.meter.quarterNotesPerMeasure;
    this.availableBeats = availableBeats || this.totalBeats;
    // Beats is an array of musical note object, in our case oscillators
    this.beats = [];
  }

  updateAvailableBeats(beatLength) {
    const nextbeatLength = this.availableBeats - beatLength;

    this.availableBeats = nextbeatLength < 0 ? 0 : nextbeatLength;
  }

  /**
   * Helper method to expose beat info
   * @param {Number} index The index of the beat we want to get
   * @returns Object Metadata object containing the note's information
   */
  getBeatAtIndex(index) {
    const beat = this.beats[index];

    return beat === -1 ? {} : beat.toJSON();
  }
}

export default Measure;
