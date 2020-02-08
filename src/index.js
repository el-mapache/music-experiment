import githubClient from 'services/github-client';
import sequencer from 'services/sequencer';
import buildScore, { buildNoteSequence } from 'services/score-builder';
import recorder from 'services/recorder';
import { bootstrap, tock } from 'data/repos';

import melodyModel from 'services/melody-generator';


const NOTES = {
  notes: [
    {pitch: 60, startTime: 0.0, endTime: 0.5},
    {pitch: 60, startTime: 0.5, endTime: 1.0},
    {pitch: 67, startTime: 1.0, endTime: 1.5},
    {pitch: 67, startTime: 1.5, endTime: 2.0},
    {pitch: 69, startTime: 2.0, endTime: 2.5},
    {pitch: 69, startTime: 2.5, endTime: 3.0},
    {pitch: 67, startTime: 3.0, endTime: 4.0},
    {pitch: 65, startTime: 4.0, endTime: 4.5},
    {pitch: 65, startTime: 4.5, endTime: 5.0},
    {pitch: 64, startTime: 5.0, endTime: 5.5},
    {pitch: 64, startTime: 5.5, endTime: 6.0},
    {pitch: 62, startTime: 6.0, endTime: 6.5},
    {pitch: 62, startTime: 6.5, endTime: 7.0},
    {pitch: 60, startTime: 7.0, endTime: 8.0},  
  ],
  totalTime: 12
};

// melodyModel()
//   .then((magenta) => {
//     const qns = magenta.sequences.quantizeNoteSequence(NOTES, 1.5);
//     magenta.model.continueSequence(qns, 25, .8)
//       .then((sample) => {
//         console.log(magenta.sequences.unquantizeSequence(sample))
//       });
//   });

const testRepos = {
  tock: {
    name: 'tock',
    data: tock
  },
  bootstrap: {
    name: 'bootstrap',
    data: bootstrap
  }
};

let lastData;
let myRecorder = recorder();

const isOffline = (debug) => {
  if (debug || !navigator.onLine) {
    return true;
  }
};

const playScore = (data) => {
  myRecorder.start();
  
  const score = buildScore(data);
  console.log(buildNoteSequence(data));
  // const tockCommitHistory = JSON.parse(tock);
  // const score = buildScore(tockCommitHistory)
  
  // const score = buildScore(
  //   normalizeRepoStats({
  //     data: JSON.parse(bootstrap)
  //   })
  // );

  const radSequencer = sequencer({
    bpm: 108,
    onDone() {
      myRecorder.stop();
    },
  });
  
  radSequencer.play([score], 108);
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
  if (isOffline(false)) {
    return Promise.resolve({ data: JSON.parse(bootstrap) });
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

const select = document.getElementById('repos');
const selectRepoControl = document.getElementById('select-repo'); 
const repoSearch = document.getElementById('search-repo');

repoSearch.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopImmediatePropagation();

  const { target: form } = event;
  const { repo, owner } = form;

  if (!repo.value || !owner.value) {
    throw new Error('Form requires a repo name and owner name fo that repo');
  }

  getCommitStatsAndPlay(owner.value, repo.value);
});

select.addEventListener('change', onRepoSelect);

const populateSelectNode = (dataList) => {
  const fragment = document.createDocumentFragment();

  const option = document.createElement('option');
  option.value = '';
  option.textContent = 'Select a repo';

  fragment.appendChild(option);

  dataList.forEach((repo) => {
    const { name } = repo;
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
  
    fragment.appendChild(option);
  });
  
  select.appendChild(fragment);
};

populateSelectNode(Object.keys(testRepos).map(r => ({ name: testRepos[r].name })));
