import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { store } from 'ui/store';
import { actions } from 'ui/actions';
import ErrorMessage from 'ui/components/error-message';
import PreloadedRepoForm from 'ui/components/preloaded-repo-form';
import SearchRepoForm from 'ui/components/search-repo-form';


const preventSubmit = event => event.preventDefault();

const renderForm = (activeForm) => {
  if (!activeForm) {
    return null;
  }

  return activeForm === 'preloaded-repo' ?
    <PreloadedRepoForm /> :
    <SearchRepoForm />;
};

const RepoFormDispatcher = () => {
  const { dispatch, state } = useContext(store);
  const { formUI, activeRepo, commitData } = state;
  const {
    activeFormName,
    cachedRepos,
    preloadedRepos
  } = formUI;
  const hasActiveRepo = activeRepo.name && activeRepo.owner;
  // TODO use a class name
  const disableBtn = !hasActiveRepo || commitData.status === 'error' ? ' opacity-25 pointer-events-none' : ''
  const handleSubmit = () => {
    // TODO: selector here
    if (commitData.status === 'fetching') {
      return;
    }

    if (typeof isCached !== 'undefined') {
      actions.COMMIT_DATA.load(dispatch)(preloadedRepos[isCached].data);
    } else {
      actions.COMMIT_DATA.fetch(dispatch)(activeRepo.owner, activeRepo.name);
    }
  };

  return (
    <form id="search-repo" class="w-1/2" onClick={preventSubmit}>
      { renderForm(activeFormName) }
      <ErrorMessage forState='commitData' />
      <div class="mt-10">
        <button
          type="submit"
          class={`btn-primary ${disableBtn}`}
          disabled={!hasActiveRepo}
          onClick={handleSubmit}
        >
          Generate music
        </button>
      </div>
    </form>
  );
};

export default RepoFormDispatcher;
