import AudioContextProvider from './audio-context-provider';

const recorder = context => ({ stream }) => {
  const mediaRecorder = new MediaRecorder(stream);
  let chunks = [];

  mediaRecorder.ondataavailable = (event) => {
    console.log('data available!', event.data)
    chunks.push(event.data);
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { 'type': 'audio/wav' });
    //const downloadLink = document.createElement('audio');
    //downloadLink.src = URL.createObjectURL(blob);
    //downloadLink.download = 'track.wav';

    //document.body.appendChild(downloadLink);
    //downloadLink.click();
  };

  return {
    start() {
      mediaRecorder.start();
    },

    stop() {
      mediaRecorder.stop();
    }
  }
};

export { recorder };
export default AudioContextProvider(recorder);
