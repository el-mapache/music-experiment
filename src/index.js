import githubClient from 'services/github-client';
import sequencer from 'services/sequencer';
import buildScore, { buildNoteSequence } from 'services/score-builder';
import recorder from 'services/recorder';
import { bootstrap, tock } from 'data/repos';

import melodyModel from 'services/melody-generator';


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
  // const score = buildScore(data);
  const magentaSequence = buildNoteSequence(data);
  console.log(magentaSequence)
  melodyModel()
    .then((magenta) => {
      const qns = magenta.sequences.quantizeNoteSequence(magentaSequence, 4);
      magenta.model.continueSequence(qns, 20,2)
        .then((sample) => {
          console.log(sample)
          console.log(magenta.sequences.unquantizeSequence(sample))
        });
    });
  // const radSequencer = sequencer({
  //   bpm: 108,
  //   onDone() {
  //     myRecorder.stop();
  //   },
  // });
  // myRecorder.start();
  // radSequencer.play([score], 108);
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
