import githubClient from 'services/github-client';
import oscillator from 'services/oscillator';

const user = 'el-mapache';

const fetchRepos = async () => {
  const { data } = await githubClient.reposForUser(user);
  return data;
};

const onRepoSelect = (event) => {
  const { value: repo } = event.target;

  githubClient.getRepoStats(user, repo)
  .then((stats) => {
    /**
     * stats are returned as an array of objects.
     * The first key is the one we care about, `days`.
     * It is an array of 7 entries, with each entry corresponding
     * to the number of commits made to the repo on a day of the week.
     * Index 0 is sunday, 1 in monday, etc.
     */
    console.log(stats)
  });
};

const select = document.getElementById('repos');
const fragment = document.createDocumentFragment();

select.addEventListener('change', onRepoSelect);

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

const o = oscillator();

o.connectTo(o.context.destination);
o.start(o.context.currentTime);
o.stop(o.context.currentTime + .001);
