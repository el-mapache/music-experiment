import AudioContextProvider from './audio-context-provider';

// 15ms ramp down time to provide smooth fade out
const rampDownDelayTime = 0.0015;
// zero is generally recognized as a non-finite value so we provide
// a tiny value instead
const webAudioZero = .0001;

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
const oscillator = context => (oscSettings) => {
  const osc = context.createOscillator();
  const gain = context.createGain();

  osc.frequency.value = oscSettings.frequency;
  osc.connect(gain);

  return {
    get duration() {
      return oscSettings.duration;
    },

    get envelope() {
      return oscSettings.envelope;
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
        ...oscSettings
      };
    },

    start(time) {
      const { peak } = oscSettings;
      const envelope = this.envelope;

      // schedule a move to zero out the oscillator's gain
      gain.gain.setValueAtTime(webAudioZero, time);
      // schedule the node's time to max volume
      gain.gain.linearRampToValueAtTime(peak, time + envelope.attack);
      // schedule time node should play at volume
      gain.gain.linearRampToValueAtTime(envelope.hold * peak, envelope.attack + envelope.sustain + envelope.decay + time);
      osc.start(time);
    },

    stop(time) {
      const envelope = this.envelope;
      const stopTime = envelope.attack + envelope.sustain + envelope.decay + envelope.release + time;
      // Schedule a fade-out
      gain.gain.exponentialRampToValueAtTime(webAudioZero, time, rampDownDelayTime);
      osc.stop(stopTime);
    },
  };
};

export { oscillator };
export default AudioContextProvider(oscillator);
