import frequency, { toMIDI } from 'services/frequency';
import oscillator from 'services/oscillator';

const types = ['sine', 'square', 'triangle', 'sawtooth'];
const getRandomWaveType = () => types[Math.floor(Math.random() * 4)];

const noteFactory = ({ noteName, envelope, peak, type }) => {
  const toneFreq = frequency(noteName);

  const osc = oscillator({
    frequency: toneFreq,
    noteName,
    midi: toMIDI(toneFreq),
    peak,
    type: 'sine',
  });

  osc.connectTo(osc.context.destinationStream);

  return osc;
};

export default noteFactory;
