import githubClient from 'services/github-client';
import playback from 'services/playback';


const ACTION_TYPES = {
  COMMIT_DATA: {
    FETCHING: 'commitData.fetching',
    SUCCESS: 'commitData.success',
    ERROR: 'commitData.error'
  },
  FORM_UI: {
    SET_FORM_NAME: 'formUI.setActiveName'
  },
  PLAYER: {
    PLAY: 'player.play',
    DONE: 'player.done'
  },
  SET_REPO: 'setRepo',
  SET_REPO_NAME: 'setRepoName',
  SET_REPO_OWNER: 'setRepoOwner',
};

const actions = {
  FORM_UI: {
    setType(formName) {
      return {
        type: ACTION_TYPES.FORM_UI.SET_FORM_NAME,
        formName
      }
    }
  },
  COMMIT_DATA: {
    fetch: dispatch => (owner, name) => {
      dispatch({ type: ACTION_TYPES.COMMIT_DATA.FETCHING });

      githubClient.getRepoCommitStats(owner, name)
        .then((stats) => {
          dispatch({ type: ACTION_TYPES.SET_REPO_NAME, name });
          dispatch({ type: ACTION_TYPES.SET_REPO_OWNER, owner });
          dispatch({
            type: ACTION_TYPES.COMMIT_DATA.SUCCESS,
            data: stats.data
          })
        })
        .catch(() => {
          dispatch({
            type: ACTION_TYPES.COMMIT_DATA.ERROR,
            error: `No commit data found for repo "${name}"!`
          })
        });
    },
    load: dispatch => data => {
      dispatch({
        type: ACTION_TYPES.COMMIT_DATA.SUCCESS,
        data: data
      });
    }
  },
  PLAYER: {
    play: dispatch => data => {
      dispatch({ type: ACTION_TYPES.PLAYER.PLAY });

      playback.play(data)
        .then(() => {
          dispatch({ type: ACTION_TYPES.PLAYER.DONE });
        })
    }
  },
  setRepo(name, owner) {
    return {
      type: ACTION_TYPES.SET_REPO,
      name,
      owner
    };
  },
  setRepoName(name) {
    return {
      type: ACTION_TYPES.SET_REPO_NAME,
      name,
    };
  },
  setRepoOwner(owner) {
    return {
      type: ACTION_TYPES.SET_REPO_OWNER,
      owner
    };
  },
};

export {
  ACTION_TYPES,
  actions
};
