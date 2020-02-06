import AudioContextProvider from './audio-context-provider';

const SUPPORTED_MIME_TYPES = {
  WEBM: 'audio/webm'
};
const RECORDER_STATES = {
  INACTIVE: 'inactive',
  RECORDING: 'recording'
};

function isStopped(state) {
  return state === RECORDER_STATES.INACTIVE || state !== RECORDER_STATES.RECORDING;
}

const recorder = context => ({ stream } = { stream: context.destinationStream }) => {
  const mediaRecorder = new MediaRecorder(stream.stream, {
    mimeType: SUPPORTED_MIME_TYPES.WEBM,
  });
  let chunks = [];

  mediaRecorder.ondataavailable = (event) => {
    chunks.push(event.data);
  };

  mediaRecorder.onstop = () => {
    // 'oh cool, I can output in webm' — no one, ever
    const blob = new Blob(chunks, { type: SUPPORTED_MIME_TYPES.WEBM });

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `gh-music-${+new Date}.webm`;

    document.body.appendChild(downloadLink);
    downloadLink.click();
  };

  return {
    start() {
      if (isStopped(mediaRecorder.state)) {
        mediaRecorder.start();
      }
    },

    stop() {
      if (!isStopped(mediaRecorder.state)) {
        mediaRecorder.stop();
      }
    }
  }
};

export { recorder };
export default AudioContextProvider(recorder);
