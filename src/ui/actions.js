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
    DONE: 'player.done',
    UPDATE_TIME: 'player.updateTime',
    VIZ: 'player.viz',
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

      playback.buildAudioGraph(data)
        .then((graph) => {
          dispatch({
            type: ACTION_TYPES.PLAYER.VIZ,
            graph
          });

          return graph;
        })
        .then((graph) => {
          return playback.play(graph);
        })
        .then((graph) => {
          dispatch({
            type: ACTION_TYPES.PLAYER.DONE,
            totalTime: graph.context.currentTime
          });
        })
    },
    updateTime(time) {
      return {
        type: ACTION_TYPES.PLAYER.UPDATE_TIME,
        currentTime: time.tick
      };
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
