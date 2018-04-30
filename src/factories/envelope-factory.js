import presets from 'types/envelope-presets';
import FilterEnvelope from 'services/envelope';

const selectEnvelopeType = () => {
  return Math.random() <= 0.5 ? presets.basic : presets.gliss;
};

const envelope = (type) => {
  const filterType = !type || !presets[type] ? selectEnvelopeType() : type;

  return new FilterEnvelope(filterType);
};

export default envelope;
