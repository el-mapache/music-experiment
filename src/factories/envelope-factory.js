import presets from 'types/envelope-presets';
import FilterEnvelope from 'services/envelope';

const selectEnvelopeType = () => {
  //return defaultState;
  return Math.random() <= 0.5 ? presets.pluck : presets.basic;
};

const envelope = (type) => {
  const filterType = !type || !presets[type] ? selectEnvelopeType() : type;

  return new FilterEnvelope(filterType);
};

export default envelope;
