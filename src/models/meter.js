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
class Meter {
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

export default Meter;
