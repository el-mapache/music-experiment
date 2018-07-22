class FilterEnvelope {
  constructor(settings) {
    if (!settings) {
      throw new Error('FilterEnvelope: No settings provided.');
    }

    // attack - time from silent to peak volume
    this.a = settings.a;
    // decay - time from attack level to sustain level
    this.d = settings.d;
    // sustain - length of time the peak level of the note is held following the attack ramp
    this.s = settings.s;
    // release - length of time from sustain level to silence once sound is done playing 
    this.r = settings.r;
    // hold - attenuated peak volume held for the (attack + sustain + release) time
    // hold is an actual level, the other values are expressions of time
    this.h = settings.h;
  }
}

export default FilterEnvelope;
