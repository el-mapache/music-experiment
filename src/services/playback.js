import sequencer from 'services/sequencer';
import buildScore from 'services/score-builder';
import recorder from 'services/recorder';


let lastData;
let myRecorder = recorder();

const playScore = (data) => {
  myRecorder.start();
  
  const score = buildScore(data);

  const radSequencer = sequencer({
    bpm: 180,
    onDone() {
      myRecorder.stop();
    },
    beatLength: score.meter.beatLength
  });
  
  radSequencer.play([score.notes], 180);
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
  playScore(data) {
    normalizeRepoStats(data)
      .then(playScore);
  }
};

export default playback;
