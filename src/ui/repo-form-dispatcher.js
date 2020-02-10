import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { store } from 'ui/store';
import PreloadedRepoForm from 'ui/preloaded-repo-form';
import SearchRepoForm from 'ui/search-repo-form';

const renderForm = (activeForm) => {
  if (!activeForm) {
    return null;
  }

  return activeForm === 'preloaded-repo' ?
    <PreloadedRepoForm /> :
    <SearchRepoForm />;
};

const handleFormSubmit = (event) => {
  event.preventDefault();
};  

const RepoFormDispatcher = () => {
  const { state } = useContext(store);
  const { formUI: { activeFormName } } = state;
  const disableBtn = !activeFormName ? ' opacity-25 pointer-events-none' : ''

  return (
    <form id="search-repo" class="w-1/2" onClick={handleFormSubmit}>
      { renderForm(state.formUI.activeFormName) }
      <div class="mt-10">
        <button type="submit" class={`btn-primary ${disableBtn}`}>
          Generate score
        </button>
      </div>
    </form>
  );
};

export default RepoFormDispatcher;
