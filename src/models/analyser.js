import AudioContextProvider from 'services/audio-context-provider';

const analyser = context => ({ fftSize }) =>{
  const a = context.createAnalyser();
  a.fftSize = fftSize;

  return a;
};

export default AudioContextProvider(analyser);
