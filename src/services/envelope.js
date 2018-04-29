const defaultState = { a: 5, d: 100, s: 100, r: 600, h: 10 };

const pad = {
  a: 5000,
  d: 200,
  s: 0,
  r: 2000,
  h: 1,
};

const pluck = {
  a: 90,
  d: 80,
  s: 400,
  r: 2,
  h: 10,
};

const stab = {
  a: 0,
  d: 20,
  s: 0,
  r: 1,
  h: 1,
};

const gliss = {
  a: 300,
  d: 1000,
  s: 0,
  r: 600,
  h: 10,
};

// generate presets like pad, staccato, etc. map those to number ranges
// that way i can have a little more consistency
// map these to ms or s in the envelope itself
// figure out usual ranges for these times. possible generate those too
const generateState = () => {
  return Math.random() <= 0.4 ? stab : gliss;
};

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
