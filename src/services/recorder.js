import AudioContextProvider from './audio-context-provider';

const recorder = context => ({ stream } = { stream: context.destinationStream }) => {
  const mediaRecorder = new MediaRecorder(stream.stream, {
    mimeType: 'audio/webm',
  });
  let chunks = [];

  mediaRecorder.ondataavailable = (event) => {
    console.log('data available!', event.data)
    chunks.push(event.data);
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'audio/webm' });
    console.log(blob)
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'track.webm';

    document.body.appendChild(downloadLink);
    downloadLink.click();
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
