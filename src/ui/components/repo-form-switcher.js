import { h } from 'preact';
import PreloadedRepoForm from 'ui/components/preloaded-repo-form';
import SearchRepoForm from 'ui/components/search-repo-form';
import { useFormUIState } from 'ui/contexts/form-ui';


const FORM_TYPES = {
  'preloaded-repo': PreloadedRepoForm,
  'search-repo': SearchRepoForm,
  default: () => <div></div>,
};

const RepoFormSwitcher = () => {
  const { name } = useFormUIState();
  const FormComponent = FORM_TYPES[name] || FORM_TYPES.default;

  return <FormComponent />;
};

export default RepoFormSwitcher;
