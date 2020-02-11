import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { store } from 'ui/store';
import PreloadedRepoForm from 'ui/preloaded-repo-form';
import SearchRepoForm from 'ui/search-repo-form';
import generateMusic from 'services/generate';

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
  const { formUI, activeRepo } = state;
  const {
    activeFormName,
    cachedRepos,
    preloadedRepos
  } = formUI;
  const hasActiveRepo = activeRepo.name && activeRepo.owner;
  const disableBtn = !hasActiveRepo ? ' opacity-25 pointer-events-none' : ''
  const handleSubmit = () => {
    const isCached = cachedRepos[activeRepo.name];

    if (typeof isCached !== 'undefined') {
      generateMusic(preloadedRepos[isCached].data, true);
    }
  };

  return (
    <form id="search-repo" class="w-1/2" onClick={handleFormSubmit}>
      { renderForm(activeFormName) }
      <div class="mt-10">
        <button
          type="submit"
          class={`btn-primary ${disableBtn}`}
          disabled={!hasActiveRepo}
          onClick={handleSubmit}
        >
          Generate score
        </button>
      </div>
    </form>
  );
};

export default RepoFormDispatcher;
