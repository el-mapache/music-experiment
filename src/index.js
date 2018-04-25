import githubClient from 'services/github-client';
import sequencer from 'services/sequencer';
import buildScore from 'services/score-builder';

const user = '18F';
let myRecorder;

const fetchRepos = async () => {
  const { data } = await githubClient.reposForUser(user);
  return data;
};
let lastData;

const playScore = (data) => {
  const score = buildScore(data);

  const radSequencer = sequencer({ bpm: 180 });//, onDone: () => myRecorder.stop() });

  radSequencer.play(score);
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


const onRepoSelect = (event) => {
  const { value: repo } = event.target;

  githubClient.getRepoStats(user, repo)
  .then(normalizeRepoStats)
  .then(playScore);
};

const select = document.getElementById('repos');
const repoSearch = document.getElementById('search-repo');
const fragment = document.createDocumentFragment();


repoSearch.addEventListener('submit', (event) => {
  event.preventDefault();

  const { target: form } = event;
  const { repo, owner } = form;

  if (!repo.value || !owner.value) {
    throw new Error('Form requires a repo name and owner name fo that repo');
  }

  githubClient.getRepoStats(
    owner.value,
    repo.value
  )
  .then(normalizeRepoStats)
  .then(playScore);
});

select.addEventListener('change', onRepoSelect);
document.querySelector('button').addEventListener('click', (event) => {
  event.preventDefault();
  if (lastData) {
    playScore(lastData);
  }
});

fetchRepos().then((repos) => {
  repos.forEach((repo) => {
    const { name } = repo;
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
  
    fragment.appendChild(option);
  });
  
  select.appendChild(fragment);
});
