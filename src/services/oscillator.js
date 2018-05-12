import AudioContextProvider from './audio-context-provider';
import envelope from 'factories/envelope-factory';

const defaultState = {
  frequency: 440,
  type: 'triangle',
  peak: 0.8,
};

// 15ms ramp down time to provide smooth fade out
const rampDownDelayTime = 0.0015;
// zero is generally recognized as a non-finite value so we provide
// a tiny value instead
const webAudioZero = 0.0001;

const oscillator = context => (oscState, envelope = envelope()) => {
  const options = { ...defaultState, ...oscState };
  const osc = context.createOscillator();
  const gain = context.createGain();
  const attack = envelope.a / 1000;
  const decay = envelope.d / 1000;
  const sustain = envelope.s / 1000;
  const release = envelope.r / 1000;
  const hold = envelope.h / 100;

  osc.type = options.type;
  osc.frequency.value = options.frequency;
  osc.connect(gain);

  return {
    get duration() {
      return decay + sustain;
    },

    get envelope() {
      return envelope;
    },

    get context() {
      return context;
    },

    connectTo(node) {
      gain.connect(node);
    },

    disconnectFrom(node) {
      gain.disconnect(node);
    },

    start(time) {
      const { peak } = options;

      gain.gain.setValueAtTime(webAudioZero, time);
      gain.gain.linearRampToValueAtTime(peak, time);
      //gain.gain.linearRampToValueAtTime(peak, time + attack);
      gain.gain.linearRampToValueAtTime(hold * peak, attack + sustain + decay + time);
      osc.start(time);
    },

    stop(time) {
      const stopTime = attack + sustain + decay + release + time;
      gain.gain.exponentialRampToValueAtTime(webAudioZero, time, rampDownDelayTime);
      osc.stop(stopTime);
    },
  };
};

export { oscillator };
export default AudioContextProvider(oscillator);
