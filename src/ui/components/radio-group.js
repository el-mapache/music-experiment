import { actions } from 'ui/actions';
import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { store } from 'ui/store.js';
import withCheckable from 'ui/with-checkable';

const RadioToggle = ({ label, helpText, className, setChecked, ...rest }) => {
  const { state, dispatch } = useContext(store);
  const { formUI } = state;
  const { name, id } = rest;
  const checked = setChecked(formUI.activeFormName, id);

  return (
    <div
      class={`radio-group-input mr-4 border-blue-400 w-1/2 ${className}${checked}`}
      onClick={() => dispatch(actions.FORM_UI.setType(id))}
    >
      <input id={id} type="radio" name={name} class="hidden radio" />
      <label for={id} class="flex items-top cursor-pointer text-xl">
        <span class="radio-control"></span>
        <span class="label">
          {label}
          <em class="help-text text-lg">{helpText}</em>
        </span>
      </label>
    </div>
  )
};

const RadioButton = withCheckable(RadioToggle);

const RadioGroup = ({ name, label, helpText }) => {
  return (
    <div class="radio-group w-2/3 mb-10 mt-10" role="radiogroup">
      <div role="label" class="w-full block mb-1">
        <h2 class="block font-bold text-xl text-indigo-700">{label}</h2>
        <em class="font-medium font-serif text-gray-600">{helpText}</em>
      </div>
      <RadioButton
        label="Use a preloaded repo"
        helpText="Select from a prefetched repo"
        name={name}
        id="preloaded-repo"
      />
      <RadioButton
        label="Let me enter a repo"
        helpText="Search for repos on GitHub"
        className="flex-1"
        name={name}
        id="search-repos"
      />
    </div>
  );
};

export default RadioGroup;
