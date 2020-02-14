import { h, createContext } from 'preact';
import { bootstrap, tock } from 'data/repos';
import { useReducer } from 'preact/hooks';
import { ACTION_TYPES } from 'ui/actions';
import PLAYER_STATUS from 'ui/types/player-status';
import COMMIT_DATA_STATUS from 'ui/types/commit-status';
import buildNoteSequence from 'services/build-note-sequence';


const preloadedRepoData = {
  'tock': JSON.parse(tock),
  'bootstrap': JSON.parse(bootstrap)
};

const initialState = {
  player: {
    status: PLAYER_STATUS.IDLE,
    totalTime: 0,
    timeRemaining: '',
    currentTime: 0,
    graph: null
  },
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
    }, {
      name: 'bootstrap',
      owner: 'twitter',
    }],
  },
  activeRepo: {
    name: '',
    owner: ''
  },
  commitData: {
    status: COMMIT_DATA_STATUS.IDLE,
    data: null,
    error: ''
  }
};

const updatePlayerStatus = (status) => {
  if (
    status === PLAYER_STATUS.PLAYING ||
    status === PLAYER_STATUS.PAUSED
  ) {
    return false;
  }

  return true;
}

// TODO: Starting to seem like i need to break these out...
function appReducer(state, action) {
  const { type, ...rest } = action;

  switch(type) {
    case ACTION_TYPES.SET_REPO: {
      const { status } = state.player;
      const preloadedData = preloadedRepoData[rest.name];
      const nextPlayerStatus = updatePlayerStatus(status) ? PLAYER_STATUS.READY : status;

      return {
        ...state,
        activeRepo: {
          name: rest.name,
          owner: rest.owner
        },
        // ideally these stores would listen to this event
        player: {
          ...state.player,
          status: nextPlayerStatus
        },
        commitData: {
          ...state.commitData,
          data: buildNoteSequence(preloadedData)
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
          status: COMMIT_DATA_STATUS.IDLE,
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
          status: COMMIT_DATA_STATUS.IDLE,
          error: ''
        }
      };
    }
    case ACTION_TYPES.FORM_UI.SET_FORM_NAME: {
      // TODO: Another good selector candidate
      const nextActiveRepo = state.player.status === PLAYER_STATUS.IDLE ? 
        initialState.activeRepo : state.activeRepo;

      return {
        ...state,
        formUI: {
          ...state.formUI,
          activeFormName: rest.formName
        },
        activeRepo: {
          ...nextActiveRepo
        },
        commitData: {
          ...initialState.commitData,
          data: state.commitData.data,
        }
      };
    }
    case ACTION_TYPES.COMMIT_DATA.FETCHING: {
      return {
        ...state,
        commitData: {
          ...state.commitData,
          status: COMMIT_DATA_STATUS.FETCHING
        }
      }
    }
    case ACTION_TYPES.COMMIT_DATA.ERROR: {
      return {
        ...state,
        commitData: {
          ...state.commitData,
          status: COMMIT_DATA_STATUS.ERROR,
          error: rest.error
        }
      }
    }
    case ACTION_TYPES.COMMIT_DATA.SUCCESS: {
      return {
        ...state,
        commitData: {
          status: COMMIT_DATA_STATUS.SUCCESS,
          error: '',
          data: buildNoteSequence(rest.data)
        },
        player: {
          ...state.player,
          status: PLAYER_STATUS.READY
        }
      }
    }
    case ACTION_TYPES.PLAYER.PLAY: {
      return {
        ...state,
        player: {
          ...state.player,
          status: PLAYER_STATUS.PLAYING,
          currentTime: 0
        }
      }
    }
    case ACTION_TYPES.PLAYER.DONE: {
      return {
        ...state,
        player: {
          ...state.player,
          status: PLAYER_STATUS.STOPPED,
          totalTime: rest.totalTime,
          graph: null
        }
      };
    }
    case ACTION_TYPES.PLAYER.UPDATE_TIME: {
      return {
        ...state,
        player: {
          ...state.player,
          currentTime: rest.currentTime
        }
      };
    }
    case ACTION_TYPES.PLAYER.VIZ: {
      return {
        ...state,
        player: {
          ...state.player,
          graph: rest.graph
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

const playerStatusSelector = (state) => {
  const { player } = state;
  
  return {
    isPlaying() {
      return player.status === PLAYER_STATUS.PLAYING;
    },
    isStopped() {
      return player.status === PLAYER_STATUS.STOPPED;
    },
    isIdle() {
      return player.status === PLAYER_STATUS.IDLE;
    },
    isPaused() {
      return player.status === PLAYER_STATUS.PAUSED;
    }
  }
};

export { store, playerStatusSelector, PLAYER_STATUS };
export default StateProvider;
