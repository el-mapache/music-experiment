import presets from 'types/envelope-presets';
import FilterEnvelope from 'models/envelope';

const selectEnvelopeType = () => {
  return Math.random() <= 0.5 ? presets.basic : presets.gliss;
};

/**
 * 
 * Factory used to generate an envelope settings object to be applied to a
 * sound source. If an invalid preset is requested, or the factory is
 * called with no arguments, a random preset will be returned.
 * 
 * @param {string} type the name of the envelope preset to create
 * @returns An instance of FilterEnvelope, which controls a sound source's
 * attack, decay, sustain, release, and hole values 
 */
const envelope = (type) => {
  const filterType = !type || !presets[type] ? selectEnvelopeType() : type;

  return new FilterEnvelope(filterType);
};

export default envelope;
