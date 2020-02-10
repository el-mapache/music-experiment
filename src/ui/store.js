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
    activeRepo: {
      name: '',
      owner: ''
    }
  },
};

const ACTION_TYPES = {
  FORM_UI: {
    SET_REPO: 'formUI.setRepo',
    SET_FORM_NAME: 'formUI.setActiveName'
  }
};

const ACTIONS = {
  FORM_UI: {
    setRepo(name, owner) {
      return {
        type: ACTION_TYPES.FORM_UI.SET_REPO,
        name,
        owner
      };
    },
    setType(formName) {
      console.log('hii')
      return {
        type: ACTION_TYPES.FORM_UI.SET_FORM_NAME,
        formName
      }
    }
  }
};

function appReducer(state, action) {
  const { type, ...rest } = action;

  switch(type) {
    case ACTION_TYPES.FORM_UI.SET_REPO: {
      return {
        ...state,
        formUI: {
          ...state.formUI,
          activeRepo: {
            name: rest.name,
            owner: rest.owner
          }
        }
      };
    }
    case ACTION_TYPES.FORM_UI.SET_FORM_NAME: {
      console.log('action')
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
