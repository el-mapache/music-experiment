import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { store } from 'ui/store';
import ErrorMessage from 'ui/components/error-message';
import PreloadedRepoForm from 'ui/components/preloaded-repo-form';
import SearchRepoForm from 'ui/components/search-repo-form';


const FORM_TYPES = {
  'preloaded-repo': PreloadedRepoForm,
  'search-repo': SearchRepoForm,
  default: () => <div></div>,
};

const RepoFormDispatcher = () => {
  const { state } = useContext(store);
  const { formUI } = state;
  const {
    activeFormName,
  } = formUI;

  const FormComponent = FORM_TYPES[activeFormName] || FORM_TYPES.default;

  return (
    <div>
      <FormComponent />
      <ErrorMessage forState='commitData' />
    </div>
  );
};

export default RepoFormDispatcher;
