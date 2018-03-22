import GitHub from '@octokit/rest';

const githubClient = GitHub({
  requestMedia: 'application/vnd.github.v3+json',
});

const reposForUser = (username) => {
  return githubClient.repos.getForUser({
    username,
    per_page: 50,
  })
  .catch(error => console.warn(error));
};

const repoCommitStats = ({ owner, repo }) => {
  return githubClient.repos.getStatsCommitActivity({
    owner,
    repo
  })
  .catch((error) => {
    console.warn(
      `Error getting stats for ${repo}`, error.message
    );
  });
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
    return repoCommitStats({
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

export default {
  reposForUser,
  getRepoStats,
};
