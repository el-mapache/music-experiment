import sequencer from 'services/sequencer';
import recorder from 'services/recorder';
import buildNoteSequence from 'services/note-sequence';
import audioGraph from 'models/audio-graph';


let lastData;
let myRecorder = recorder();

const playScore = (data) => {
  //myRecorder.start();
  
  const sequence = buildNoteSequence({
    commitStats: data,
    bpm: 180,
    timeSignature: [6, 8]
  });
  
  const finalSequence = audioGraph(sequence);

  const commitSequencer = sequencer();
  
  return commitSequencer.play([finalSequence.toneClusters], 180)
    .then(() => {
      //myRecorder.stop();
    });
};

const normalizeRepoStats = (data) => {
  /**
   * stats are returned as an array of objects.
   * The first key is the one we care about, `days`.
   * It is an array of 7 entries, with each entry corresponding
   * to the number of commits made to the repo on a day of the week.
   * Index 0 is sunday, 1 in monday, etc.
   */
  const normalized = data.map((datum) => {
    return {
      days: datum.days,
      count: datum.total || datum.count
    };
  });

  lastData = normalized;

  return Promise.resolve(lastData);
};

const playback = {
  play(data) {
    return normalizeRepoStats(data)
      .then(playScore);
  }
};

export default playback;
