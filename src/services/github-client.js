import GitHub from '@octokit/rest';

const githubClient = GitHub({
  requestMedia: 'application/vnd.github.v3+json',
});

const reposForUser = (username) => {
  return githubClient.repos.getForUser({
    username,
    per_page: 50
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

export default {
  reposForUser,
  repoCommitStats,
};
