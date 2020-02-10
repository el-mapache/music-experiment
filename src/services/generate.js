import githubClient from 'services/github-client';
import sequencer from 'services/sequencer';
import buildScore from 'services/score-builder';
import recorder from 'services/recorder';


let lastData;
let myRecorder = recorder();

const isOffline = () => {
  if (!navigator.onLine) {
    return true;
  }
};

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

const normalizeRepoStats = (stats) => {
  /**
   * stats are returned as an array of objects.
   * The first key is the one we care about, `days`.
   * It is an array of 7 entries, with each entry corresponding
   * to the number of commits made to the repo on a day of the week.
   * Index 0 is sunday, 1 in monday, etc.
   */
  const data = stats.data.map((datum) => {
    return {
      days: datum.days,
      count: datum.total || datum.count
    };
  });

  lastData = data;

  return lastData;
};

const getRepoCommitStats = (user, repo) => {
  if (isOffline()) {
    // here we should have an error
    console.log('No internet connection detected. Please choose an example repo')
  }

  return githubClient.getRepoCommitStats(user, repo);
};

const getCommitStatsAndPlay = (user, repo) => {
  if (lastData) {
    playScore(lastData);
  } else {
    getRepoCommitStats(user, repo)  
      .then(normalizeRepoStats)
      .then(playScore);
  }
};
// TODO: This should really be 2 separate functions
const generate = (data, isCached) => {
  if (isCached) {
    playScore(data)
  } else {
    getCommitStatsAndPlay(data.owner, data.repo);
  }
};

export default generate;
