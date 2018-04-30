class FilterEnvelope {
  constructor(settings = generateState()) {
    // attack - time from silent to peak volume
    this.a = settings.a;
    // decay - time from attack level to sustain level
    this.d = settings.d;
    // sustain - level of the note following the attack and decay ramp
    // Sustain is an actual level, the other values are expressions of time
    this.s = settings.s;
    // release - length of time from sustain level to silence once sound is done playing 
    this.r = settings.r;
    // hold - fixed length of time at which the sustain volume is held
    this.h = settings.h;
  }
}

export default FilterEnvelope;
