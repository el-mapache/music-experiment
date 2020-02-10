import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { store, ACTIONS } from 'ui/store';
import withCheckable from 'ui/with-checkable';

const { FORM_UI } = ACTIONS;

const RadioButton = ({ id, label, name, checked, value, onClick }) => {
  const handleClick = () => {
    onClick(FORM_UI.setRepo(id, value));
  };

  return (
    <div
      class={`radio-button ${checked}`}
      onClick={handleClick}
    >
      <label for={id} class="text-gray-700 font-bold py-3 px-4">
        {label}
      </label>
      <input id={id} type="radio" class="hidden toggle" value={value} name={name} />
    </div>
  );
};

const PreloadedRepoForm = ({ setChecked }) => {
  const { dispatch, state } = useContext(store);
  const { formUI: { preloadedRepos, activeRepo } } = state;

  return (
    <div>
      <p class="block font-bold text-xl text-indigo-700 mb-1" role="label">
        Choose a preloaded repository
      </p>
      <div class="button-group">
        { preloadedRepos.map(repo => {
          return (
            <RadioButton
              key={`${repo.name}-${repo.owner}`}
              id={repo.name}
              value={repo.owner}
              label={`${repo.name} — ${repo.owner}`}
              name="preloaded"
              checked={setChecked(activeRepo.name, repo.name)}
              onClick={dispatch}
            />
          );
        })}
      </div>
    </div>
  );
};

export { PreloadedRepoForm }
export default withCheckable(PreloadedRepoForm);
