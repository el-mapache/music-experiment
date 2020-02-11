import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { store } from 'ui/store';
import PreloadedRepoForm from 'ui/components/preloaded-repo-form';
import SearchRepoForm from 'ui/components/search-repo-form';
import scoreGenerator from 'services/score-generator';

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

    // move these to actions once verified
    if (typeof isCached !== 'undefined') {
      scoreGenerator.fromCache(preloadedRepos[isCached].data);
    } else {
      scoreGenerator.fromWeb(activeRepo.owner, activeRepo.name);
    }
  };

  return (
    <form id="search-repo" class="w-1/2" onClick={preventSubmit}>
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
