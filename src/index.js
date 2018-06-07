import githubClient from 'services/github-client';
import sequencer from 'services/sequencer';
import buildScore from 'services/score-builder';
import recorder from 'services/recorder';
import { bootstrap, tock, static18f } from 'data/repos';

const user = '18F';

let lastData;
let playing = false;
let myRecorder = recorder();

const isOffline = (debug) => {
  if (debug || !navigator.onLine) {
    return true;
  }
};

const fetchRepos = async () => {
  const { data } = await githubClient.reposForUser(user);
  return data;
};

const playScore = (data) => {
  playing = true;

  const score = buildScore(data);
  // const score = buildScore(
  //   normalizeRepoStats({
  //     data: JSON.parse(tock)
  //   })
  // );
  // const score2 = buildScore(
  //   normalizeRepoStats({
  //     data: JSON.parse(bootstrap)
  //   })
  // );

  const radSequencer = sequencer({
    bpm: 180,
    onDone() {
      myRecorder.stop();
      playing = false;
    },
  });

  // myRecorder.start();
  radSequencer.play([score]);
};

const normalizeRepoStats = (stats) => {
  /**
   * stats are returned as an array of objects.
   * The first key is the one we care about, `days`.
   * It is an array of 7 entries, with each entry corresponding
   * to the number of commits made to the repo on a day of the week.
   * Index 0 is sunday, 1 in monday, etc.
   */
  const data = stats.data.map(datum => ({ days: datum.days, count: datum.total}));
  lastData = data;

  return lastData;
};

const getRepoStats = (user, repo) => {
  // if (isOffline(false)) {
  //   return Promise.resolve({ data: JSON.parse(bootstrap) });
  // }

  return githubClient.getRepoStats(user, repo);
};


const getCommitStatsAndPlay = (user, repo) => {
  if (lastData) {
    playScore(lastData);
  } else {
    getRepoStats(user, repo)  
    .then(normalizeRepoStats)
    .then(playScore);
  }
};

const onRepoSelect = (event) => {
  const { value: repo } = event.target;

  getCommitStatsAndPlay(user, repo);
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
selectRepoControl.addEventListener('click', (event) => {
  event.preventDefault();
  if (lastData) {
    playScore(lastData);
  }
});

const populateSelectNode = (dataList) => {
  const fragment = document.createDocumentFragment();

  dataList.forEach((repo) => {
    const { name } = repo;
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
  
    fragment.appendChild(option);
  });
  
  select.appendChild(fragment);
};

if (navigator.onLine) {
  fetchRepos().then(populateSelectNode);
}
