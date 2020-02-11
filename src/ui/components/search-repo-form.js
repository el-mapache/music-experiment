import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { store, ACTIONS  } from 'ui/store';

const handleInput = (dispatch, action) => event =>
  dispatch(action(event.target.value));

const SearchRepoForm = () => {
  const { dispatch, state } = useContext(store);
  const updateActiveRepoName = handleInput(dispatch, ACTIONS.setRepoName);
  const updateActiveRepoOwner = handleInput(dispatch, ACTIONS.setRepoOwner);

  return (
    <div class="flex items-center -mx-2">
      <div class="m-2 my-0">
        <label for="repo" class="block font-bold text-xl text-indigo-700 mb-1">
          Repo name
        </label>
        <input
          id="repo"
          type="text"
          name="repo"
          placeholder="enter repo name"
          class="input"
          value={state.activeRepo.name}
          onInput={updateActiveRepoName}
        />
      </div>
      <div class="m-2 my-0">
        <label for="owner" class="block font-bold text-xl text-indigo-700 mb-1">
          Repo owner
        </label>
        <input
          id="owner"
          type="text"
          name="owner"
          placeholder="enter repo owner"
          class="input"
          value={state.activeRepo.owner}
          onInput={updateActiveRepoOwner}
        />
      </div>
    </div>
  );
};

export default SearchRepoForm;
