import githubClient from 'services/github-client';

const user = 'el-mapache';

const fetchRepos = async () => {
  const { data } = await githubClient.reposForUser(user);
  return data;
};

/**
 * 
 * @param {String} user 
 * @param {String} repo
 * 
 * The commit stats API call needs time to compute a repo's
 * commit history. If the first call doesn't populate the data object
 * return a new promise with a recursive call the getStats inside a timeout --
 * the delay should provide enough time for the API to compute a result 
 * 
 * TODO move this into the github service
 */
const getRepoStats = (user, repo) => {
  function getStats() {
    return githubClient.repoCommitStats({
      owner: user,
      repo
    })
    .then((stats) => {
      if (stats.data.length) {
        return Promise.resolve(stats);
      }
      
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(getStats()), 4000); 
      });
    });
  }

  return new Promise((resolve, reject) => {
    getStats().then((stats) => resolve(stats));
  });
};

const onRepoSelect = (event) => {
  const { value: repo } = event.target;

  getRepoStats(user, repo)
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
