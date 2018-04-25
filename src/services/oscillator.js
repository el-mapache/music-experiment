import AudioContextProvider from './audio-context-provider';
import Envelope from './envelope';

const defaultState = {
  frequency: 440,
  type: 'triangle',
  peak: 0.8,
};

const oscillator = context => (oscState, envelope = new Envelope()) => {
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

      gain.gain.linearRampToValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(peak, time);
      // gain.gain.linearRampToValueAtTime(peak, time + attack);
      // gain.gain.linearRampToValueAtTime(hold * peak, attack + sustain + decay + time);
      osc.start(time);
    },

    stop(time) {
      const stopTime = attack + sustain + decay + release + time;
      gain.gain.linearRampToValueAtTime(0.0001, time);
      osc.stop(stopTime);
    },
  };
};

export { oscillator };
export default AudioContextProvider(oscillator);
