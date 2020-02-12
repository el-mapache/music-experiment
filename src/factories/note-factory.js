import frequency, { toMIDI } from 'services/frequency';
import envelopeFactory from 'factories/envelope-factory';

const WEB_AUDIO_ZERO = .0001;
const msInSecond = 1000;
const types = ['sine', 'square', 'triangle', 'sawtooth'];
const getRandomWaveType = () => types[Math.floor(Math.random() * 4)];

class Tone {
  constructor({ noteName, timing, peak,  noteType, envelope = envelopeFactory(), toneType = 'sine' }) {
    this.noteType = noteType;
    this.noteName = noteName;
    this.frequency = frequency(noteName);
    this.envelope = this.resolveEnvelopeValues(envelope);
    this.duration = this.envelope.decay + this.envelope.sustain;
    this.peak = noteName ? peak : WEB_AUDIO_ZERO,
    this.toneType = toneType;
    this.timing = timing;
    this.startTime = null;
    this.endTime = null;
  }

  resolveEnvelopeValues(envelope) {
    return {
      attack: envelope.a / msInSecond,
      decay: envelope.d / msInSecond,
      sustain: envelope.s / msInSecond,
      release: envelope.r / msInSecond,
      hold: envelope.h / 100,
    }
  }

  addTimingInfo(offsetStartTime) {
    const noteEnd = offsetStartTime + this.duration + this.timing;
    this.startTime = parseFloat(offsetStartTime.toFixed(2)),
    this.endTime = parseFloat(noteEnd.toFixed(2))
  }

  humanize(time) {
    return time - .01 / 2 + Math.random() * .01;
  }
}

export { Tone };

