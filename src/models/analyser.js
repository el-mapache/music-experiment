import AudioContextProvider from 'services/audio-context-provider';

const analyser = context => ({ fftSize }) =>{
  const analyserNode = context.createAnalyser();
  analyserNode.fftSize = fftSize;

  return analyserNode;
};

export default AudioContextProvider(analyser);
