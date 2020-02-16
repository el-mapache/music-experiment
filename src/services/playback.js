import scheduler from 'services/scheduler';
import recorder from 'services/recorder';
import audioGraph from 'models/audio-graph';


const commitSequencer = scheduler();
let lastData;
let myRecorder = recorder();

const playback = {
  buildAudioGraph(initialSequence) {
    return new Promise((resolve) => {
      const graph = audioGraph(initialSequence);

      resolve(graph);
    });
  },
  play(graph) {
    //myRecorder.start();
    const notesToSequence = graph.sequence.toneClusters.slice();
    return commitSequencer.play(notesToSequence)
      .then(() => {
        return graph;
        //myRecorder.stop();
      });
  }
};

const commitSequencerSubscriber = commitSequencer.subscribe;

export { commitSequencerSubscriber };
export default playback;
