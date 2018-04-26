import AudioContextProvider from './audio-context-provider';
import frequency from './frequency';
import oscillator from './oscillator';

const noteFactory = context => ({ noteName, envelope, peak, type }) => {
  const osc = oscillator({
    frequency: frequency(noteName),
    peak,
  });

  // TODO: think about how to remove all these connections, now
  // the factory has too many responsibilites
  osc.connectTo(osc.context.destinationStream);
  // osc.connectTo(osc.context.destination);

  return osc;
};

export { noteFactory };
export default AudioContextProvider(noteFactory);
