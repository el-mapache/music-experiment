import scoreGenerator from 'services/score-generator';

const ACTION_TYPES = {
  COMMIT_DATA: {
    FETCHING: 'commitData.fetching',
    SUCCESS: 'commitData.success',
    ERROR: 'commitData.error'
  },
  FORM_UI: {
    SET_FORM_NAME: 'formUI.setActiveName'
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
    fetchData: dispatch => (owner, name) => {
      dispatch({ type: ACTION_TYPES.COMMIT_DATA.FETCHING });

      scoreGenerator.fromWeb(owner, name)
        .then((data) => dispatch({
          type: ACTION_TYPES.COMMIT_DATA.SUCCESS,
          data
        }))
        .catch(() => {
          dispatch({
            type: ACTION_TYPES.COMMIT_DATA.ERROR,
            error: `No commit data found for repo "${name}"!`
          })
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
