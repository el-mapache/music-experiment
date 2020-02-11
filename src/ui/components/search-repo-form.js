import { actions } from 'ui/actions';
import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { store  } from 'ui/store';

const handleInput = (dispatch, action) => event =>
  dispatch(action(event.target.value));

const SearchRepoForm = () => {
  const { dispatch, state: { activeRepo, commitData } } = useContext(store);
  const updateActiveRepoName = handleInput(dispatch, actions.setRepoName);
  const updateActiveRepoOwner = handleInput(dispatch, actions.setRepoOwner);
  const error = commitData.status === 'error' ?
    'error' : '';

  return (
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
    </div>
  );
};

export default SearchRepoForm;
