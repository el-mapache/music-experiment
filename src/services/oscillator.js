import AudioContextProvider from './audio-context-provider';
import envelopeFactory from 'factories/envelope-factory';

const defaultState = {
  frequency: 440,
  noteName: 'A4',
  midi: 69,
  type: 'triangle',
  peak: 0.8,
};

// 15ms ramp down time to provide smooth fade out
const rampDownDelayTime = 0.0015;
// zero is generally recognized as a non-finite value so we provide
// a tiny value instead
const webAudioZero = 0.0001;

// for converting a number in seconds to milliseconds
const msInSecond = 1000;

/**
 * Handles building an oscillator for a single sound event. Once a context is injected,
 * the oscillator acts as a factory function, constructing a new oscillator and
 * returning an object with methods used to control it.
 * Each oscillator has an accompanying gain node to control loudness.
 * 
 * Oscillators are connected to their gain nodes when constructed,
 * and any effects added to it will be added AFTER the gain stage!
 * 
 * @param {WebAudioContext} context inject context into oscillator, exposing it to
 * web audio functionality
 * @returns Oscillator factory function
 *    @param {Object} oscState describe the oscillator { frequency: number, type: string, peak: float }
 *    @param {Envelope} adsr values for the oscillator
 */
const oscillator = context => (oscState, envelope = envelopeFactory()) => {
  const options = { ...defaultState, ...oscState };
  const osc = context.createOscillator();
  const gain = context.createGain();
  const attack = envelope.a / msInSecond;
  const decay = envelope.d / msInSecond;
  const sustain = envelope.s / msInSecond;
  const release = envelope.r / msInSecond;
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

    /**
     * Returns a new object representing metadata
     * about this oscillator object
     */
    toJSON() {
      return {
        ...options
      };
    },

    start(time) {
      const { peak } = options;

      // schedule a move to zero out the oscillator's gain
      gain.gain.setValueAtTime(webAudioZero, time);
      // schedule the node's time to max volume
      gain.gain.linearRampToValueAtTime(peak, time + attack);
      // schedule time node should play at volume
      gain.gain.linearRampToValueAtTime(hold * peak, attack + sustain + decay + time);
      osc.start(time);
    },

    stop(time) {
      const stopTime = attack + sustain + decay + release + time;
      // Schedule a fade-out
      gain.gain.exponentialRampToValueAtTime(webAudioZero, time, rampDownDelayTime);
      osc.stop(stopTime);
    },
  };
};

export { oscillator };
export default AudioContextProvider(oscillator);
