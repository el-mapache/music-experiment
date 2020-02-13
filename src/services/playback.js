import sequencer from 'services/sequencer';
import recorder from 'services/recorder';
import audioGraph from 'models/audio-graph';


const commitSequencer = sequencer();
let lastData;
let myRecorder = recorder();


const playScore = (sequence) => {
  //myRecorder.start();
  const finalSequence = audioGraph(sequence);  
  return commitSequencer.play([finalSequence.toneClusters])
    .then(() => {
      //myRecorder.stop();
    });
};

const playback = {
  play(data) {
    return playScore(data);
  }
};

const commitSequencerSubscriber = commitSequencer.subscribe;

export { commitSequencerSubscriber };
export default playback;
