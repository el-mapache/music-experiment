import GitHub from '@octokit/rest';

const defaultResultsPerPage = 100;

const githubClient = GitHub({
  requestMedia: 'application/vnd.github.v3+json',
});

const MAX_RETRIES = 10;
const RETRY_TIMEOUT_MS  = 4000;

/**
 * Get a list of repos for the specified user
 * TODO: add a way to page results
 * @param {String} username Account name whose repos you are requesting
 * @param {Number} perPage The number of repositories to return in a page of results
 * @return {} 
 */
const reposForUser = (username, perPage = defaultResultsPerPage) => {
  return githubClient.repos.getForUser({
    username,
    per_page: perPage,
  })
  .catch(error => console.warn(error));
};

const repoForUser = ({ owner, repo }) => {
  return githubClient.repos.get({
    owner,
    repo,
  })
  .catch(error => console.warn(error));
};

const repoCommitStats = ({ owner, repo }) => {
  return githubClient.repos.getCommitActivityStats({
    owner,
    repo
  })
  .catch((error) => {
    console.warn(
      `Error getting stats for ${repo}`, error.message
    );

    throw new Error(`Error getting stats for ${repo}`);
  });
};

/**
 *
 * @param {String} user
 * @param {String} repo
 * @returns {Object} The object representing a year's worth of commits.
 *
 * The commit stats API call needs time to compute a repo's
 * commit history. If the first call doesn't populate the data object
 * return a new promise with a recursive call the getStats inside a timeout --
 * the delay should provide enough time for the API to do its thing
 *
 */
const getRepoCommitStats = (user, repo) => {
  let retries = 0;

  function getStats() {
    return repoCommitStats({
      owner: user,
      repo
    })
    .then((stats) => {
      if (stats.data && stats.data.length) {
        return Promise.resolve(stats);
      }

      return new Promise((resolve) => {
        if (retries !== MAX_RETRIES) {
          retries += 1;
          setTimeout(() => resolve(getStats()), RETRY_TIMEOUT_MS);
        }
      });
    });
  }

  return getStats();
};

export default {
  repoForUser,
  reposForUser,
  getRepoCommitStats,
};
