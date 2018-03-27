class FilterEnvelope {
  constructor(settings = { a: 5, d: 100, s: 100, r: 600, h: 10 }) {
    // attack - time from silent to peak volume
    this.a = settings.a;
    // decay - time from attack level to sustain level
    this.d = settings.d;
    // sustain - level of the note following the attack and decay ramp
    this.s = settings.s;
    // release - length of time from sustain level to silence once sound is done playing 
    this.r = settings.r;
    // hold - fixed length of time at which the sustain volume is held
    this.h = settings.h;
  }
}

export default FilterEnvelope;
