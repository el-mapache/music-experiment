import { actions } from 'ui/actions';
import { h } from 'preact';
import { store } from 'ui/store';
import { useContext } from 'preact/hooks';
import withCheckable from 'ui/with-checkable';

const preloadedRepos = [{
  name: 'tock',
  owner: '18f',
}, {
  name: 'bootstrap',
  owner: 'twitter',
}];

const RadioButton = ({ id, label, name, checked, value, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick(actions.setRepo(id, value));
  };

  return (
    <div
      class={`radio-button py-2 ${checked}`}
      onClick={handleClick}
    >
      <label for={id} class="font-bold text-lg py-3 px-4">
        {label}
      </label>
      <input id={id} type="radio" class="hidden toggle" value={value} name={name} />
    </div>
  );
};

const PreloadedRepoForm = ({ setChecked }) => {
  const { dispatch, state } = useContext(store);
  const { activeRepo } = state;

  return (
    <div>
      <p class="block font-bold text-lg text-black mb-1" role="label">
        Preloaded repos
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
