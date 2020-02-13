import scheduler from 'services/scheduler';
import recorder from 'services/recorder';
import audioGraph from 'models/audio-graph';


const commitSequencer = scheduler();
let lastData;
let myRecorder = recorder();


const playback = {
  play(sequence) {
    //myRecorder.start();
    const { sequence: finalSequence } = audioGraph(sequence);
    const notesToSequence = finalSequence.toneClusters.slice();
    return commitSequencer.play(notesToSequence)
      .then(() => {
        //myRecorder.stop();
      });
  }
};

const commitSequencerSubscriber = commitSequencer.subscribe;

export { commitSequencerSubscriber };
export default playback;
