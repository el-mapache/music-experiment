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
 */
const getRepoCommitStats = (user, repo) => {
  return repoCommitStats({
    owner: user,
    repo
  });
};

export default {
  repoForUser,
  reposForUser,
  getRepoCommitStats,
};
