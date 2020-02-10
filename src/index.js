import githubClient from 'services/github-client';
import sequencer from 'services/sequencer';
import buildScore from 'services/score-builder';
import recorder from 'services/recorder';
import ui from 'ui/index';

const testRepost = {}

// const testRepos = {
//   tock: {
//     name: 'tock',
//     data: tock
//   },
//   bootstrap: {
//     name: 'bootstrap',
//     data: bootstrap
//   }
// };

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

const onRepoSelect = (event) => {
  const { value: name } = event.target;
  const repo = testRepos[name];
  const repoCommitData = JSON.parse(repo.data);
  
  playScore(repoCommitData);
};

// const select = document.getElementById('repos');
// const repoSearch = document.getElementById('search-repo');

repoSearch.addEventListener('submit', (event) => {
  debugger
  event.preventDefault();
  event.stopImmediatePropagation();

  const { target: form } = event;
  const { repo, owner } = form;

  if (!repo.value || !owner.value) {
    throw new Error('Form requires a repo name and owner name for that repo');
  }

  getCommitStatsAndPlay(owner.value, repo.value);
});

//select.addEventListener('change', onRepoSelect);

//const populateSelectNode = (dataList) => {
//   const fragment = document.createDocumentFragment();

//   const option = document.createElement('option');
//   option.value = '';
//   option.textContent = 'Select a repo';

//   fragment.appendChild(option);

//   dataList.forEach((repo) => {
//     const { name } = repo;
//     const option = document.createElement('option');
//     option.value = name;
//     option.textContent = name;
  
//     fragment.appendChild(option);
//   });
  
//   select.appendChild(fragment);
// };

// populateSelectNode(Object.keys(testRepos).map(r => ({ name: testRepos[r].name })));
