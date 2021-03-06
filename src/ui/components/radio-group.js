import { h } from 'preact';
import withCheckable from 'ui/with-checkable';
import { useFormUIUpdate, useFormUIState } from 'ui/contexts/form-ui';

const RadioToggle = ({ label, helpText, className, setChecked, ...rest }) => {
  const activeFormUpdate = useFormUIUpdate();
  const activeFormState = useFormUIState();
  const { name, id } = rest;
  const checked = setChecked(activeFormState.name, id);
  const updateHandler = () => {
    activeFormUpdate(id);
  };

  return (
    <div
      class={`radio-group-input mr-4 border-indigo-400 w-1/2 ${className}${checked}`}
      onClick={updateHandler}
    >
      <input id={id} type="radio" name={name} class="hidden radio" />
      <label for={id} class="flex items-top cursor-pointer text-lg">
        <span class="radio-control"></span>
        <span class="label">
          {label}
          <span class="help-text text-lg">{helpText}</span>
        </span>
      </label>
    </div>
  )
};

const RadioButton = withCheckable(RadioToggle);

const RadioGroup = ({ name, label, helpText }) => {
  return (
    <div class="radio-group w-2/3 mb-8 mt-8" role="radiogroup">
      <div role="label" class="w-full block mb-1">
        <h2 class="block font-bold text-lg text-black">{label}</h2>
        <em class="font-medium font-serif text-gray-700">{helpText}</em>
      </div>
      <RadioButton
        label="Listen to a preloaded repo"
        helpText="Select a repo"
        name={name}
        id="preloaded-repo"
      />
      <RadioButton
        label="Let me enter a repo"
        helpText="Search GitHub"
        className="flex-1"
        name={name}
        id="search-repo"
      />
    </div>
  );
};

export default RadioGroup;
