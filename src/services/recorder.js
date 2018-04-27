import AudioContextProvider from './audio-context-provider';

const recorder = context => ({ stream } = { stream: context.destinationStream }) => {
  const mediaRecorder = new MediaRecorder(stream.stream, {
    mimeType: 'audio/webm',
  });
  let chunks = [];

  mediaRecorder.ondataavailable = (event) => {
    chunks.push(event.data);
  };

  mediaRecorder.onstop = () => {
    // 'oh cool I can output in webm' - no one, ever
    const blob = new Blob(chunks, { type: 'audio/webm' });

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'track.webm';

    document.body.appendChild(downloadLink);
    downloadLink.click();
  };

  return {
    start() {
      if (mediaRecorder.state === 'inactive' || mediaRecorder.state !== 'recording') {
        mediaRecorder.start();
      }
    },

    stop() {
      if (mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
      }
    }
  }
};

export { recorder };
export default AudioContextProvider(recorder);
