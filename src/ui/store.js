import { h, createContext } from 'preact';
import { bootstrap, tock } from 'data/repos';
import { useReducer } from 'preact/hooks';

const initialState = {
  recorder: {
    isActive: false,
  },
  score: {
    tempo: 120,
    timeSignature: [3, 4],
  },
  formUI: {
    activeFormName: '',
    // so sloppy!!
    cachedRepos: {
      'tock': 0,
      'bootstrap': 1
    },
    preloadedRepos: [{
      name: 'tock',
      owner: '18f',
      data: JSON.parse(tock)
    }, {
      name: 'bootstrap',
      owner: 'twitter',
      data: JSON.parse(bootstrap)
    }],
  },
  activeRepo: {
    name: '',
    owner: ''
  }
};

const ACTION_TYPES = {
  FORM_UI: {
    SET_FORM_NAME: 'formUI.setActiveName'
  },
  SET_REPO: 'setRepo',
  SET_REPO_NAME: 'setRepoName',
  SET_REPO_OWNER: 'setRepoOwner',
};

const ACTIONS = {
  FORM_UI: {
    setType(formName) {
      return {
        type: ACTION_TYPES.FORM_UI.SET_FORM_NAME,
        formName
      }
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

function appReducer(state, action) {
  const { type, ...rest } = action;

  switch(type) {
    case ACTION_TYPES.SET_REPO: {
      return {
        ...state,
        activeRepo: {
          name: rest.name,
          owner: rest.owner
        }
      };
    }
    case ACTION_TYPES.SET_REPO_NAME: {
      return {
        ...state,
        activeRepo: {
          ...state.activeRepo,
          name: rest.name
        }
      };
    }
    case ACTION_TYPES.SET_REPO_OWNER: {
      return {
        ...state,
        activeRepo: {
          ...state.activeRepo,
          owner: rest.owner
        }
      };
    }
    case ACTION_TYPES.FORM_UI.SET_FORM_NAME: {
      return {
        ...state,
        formUI: {
          ...state.formUI,
          activeFormName: rest.formName
        }
      };
    }
    default:
      return state;
  }
}

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch ] = useReducer(appReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, ACTIONS };
export default StateProvider;
