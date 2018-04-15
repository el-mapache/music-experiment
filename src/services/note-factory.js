import AudioContextProvider from './audio-context-provider';
import frequency from './frequency';
import oscillator from './oscillator';

const noteFactory = context => noteString => {
  const osc = oscillator({ frequency: frequency(noteString) });
  osc.connectTo(osc.context.destination);

  return osc;
};

export { noteFactory };
export default AudioContextProvider(noteFactory);
