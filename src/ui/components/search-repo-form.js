import { actions } from 'ui/actions';
import { h } from 'preact';
import { store  } from 'ui/store';
import { useContext } from 'preact/hooks';
import COMMIT_DATA_STATUS from 'ui/types/commit-status';

const handleInput = (dispatch, action) => event =>
  dispatch(action(event.target.value));

const preventSubmit = event => event.preventDefault();

const hasError = (status) =>
  status === COMMIT_DATA_STATUS.ERROR;
const isFetching = (status) =>
  status === COMMIT_DATA_STATUS.FETCHING;

const SearchRepoForm = () => {
  const { dispatch, state: { activeRepo, commitData } } = useContext(store);
  const hasActiveRepo = activeRepo.name && activeRepo.owner;
  // TODO use a class name
  const disabled = !hasActiveRepo ||
    hasError(commitData.status) ||
    isFetching(commitData.status) ? 'disabled' : ''
  const updateActiveRepoName = handleInput(dispatch, actions.setRepoName);
  const updateActiveRepoOwner = handleInput(dispatch, actions.setRepoOwner);
  const error = hasError(commitData.status) ? 'error' : '';
  
  const handleSubmit = () => { 
    actions.COMMIT_DATA.fetch(dispatch)(activeRepo.owner, activeRepo.name);
  };

  return (
    <form id="search-repo" class="w-full" onClick={preventSubmit}>
      <div class="flex items-center -mx-2">
        <div class={`m-2 my-0 input-group ${error}`}>
          <label for="repo" class={`block font-bold text-xl text-indigo-700 mb-1 ${error}`}>
            Repo name
          </label>
          <input
            id="repo"
            type="text"
            name="repo"
            placeholder="enter repo name"
            class={`input ${error}`}
            value={activeRepo.name}
            onInput={updateActiveRepoName}
          />
        </div>
        <div class={`m-2 my-0 input-group ${error}`}>
          <label for="owner" class={`block font-bold text-xl text-indigo-700 mb-1 ${error}`}>
            Repo owner
          </label>
          <input
            id="owner"
            type="text"
            name="owner"
            placeholder="enter repo owner"
            class={`input ${error}`}
            value={activeRepo.owner}
            onInput={updateActiveRepoOwner}
          />
        </div>
        <button
          type="submit"
          class={`btn-primary ${disabled} self-end -my-1`}
          disabled={disabled}
          onClick={handleSubmit}
        >
          Get commit data 
        </button>
      </div> 
    </form>
  );
};

export default SearchRepoForm;
