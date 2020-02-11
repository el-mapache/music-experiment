import { h, createContext } from 'preact';
import { bootstrap, tock } from 'data/repos';
import { useReducer } from 'preact/hooks';
import { ACTION_TYPES } from 'ui/actions';

const STATUS_TYPES = {
  ERROR: 'error',
  SUCCESS: 'success',
  IDLE: 'idle',
  BUSY: 'busy'
}

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
  },
  commitData: {
    status: STATUS_TYPES.IDLE,
    data: null,
    error: ''
  }
};

// TODO: Starting to seem like i need to break these out...
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
        },
        commitData: {
          ...state.commitData,
          status: STATUS_TYPES.IDLE,
          error: ''
        }
      };
    }
    case ACTION_TYPES.SET_REPO_OWNER: {
      return {
        ...state,
        activeRepo: {
          ...state.activeRepo,
          owner: rest.owner
        },
        commitData: {
          ...state.commitData,
          status: STATUS_TYPES.IDLE,
          error: ''
        }
      };
    }
    case ACTION_TYPES.FORM_UI.SET_FORM_NAME: {
      return {
        ...state,
        formUI: {
          ...state.formUI,
          activeFormName: rest.formName
        },
        activeRepo: {
          ...initialState.activeRepo
        }
      };
    }
    case ACTION_TYPES.COMMIT_DATA.FETCHING: {
      return {
        ...state,
        commitData: {
          ...state.commitData,
          status: STATUS_TYPES.FETCHING
        }
      }
    }
    case ACTION_TYPES.COMMIT_DATA.ERROR: {
      return {
        ...state,
        commitData: {
          ...state.commitData,
          status: STATUS_TYPES.ERROR,
          error: rest.error
        }
      }
    }
    case ACTION_TYPES.COMMIT_DATA.SUCCESS: {
      return {
        ...state,
        commitData: {
          ...state.commitData,
          status: STATUS_TYPES.SUCCESS,
          error: '',
          data: rest.data
        }
      }
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

export { store };
export default StateProvider;
