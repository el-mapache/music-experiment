import AudioContextProvider from './audio-context-provider';
import frequency from './frequency';
import oscillator from './oscillator';

const types = ['sine', 'square', 'triangle'];

const noteFactory = context => ({ noteName, envelope, peak, type }) => {
  const osc = oscillator({
    frequency: frequency(noteName),
    peak,
    type: 'triangle'//types[Math.floor((Math.random() * 2) + 0)],
  });

  // TODO: think about how to remove all these connections, now
  // the factory has too many responsibilites
  osc.connectTo(osc.context.destinationStream);

  return osc;
};

export { noteFactory };
export default AudioContextProvider(noteFactory);
