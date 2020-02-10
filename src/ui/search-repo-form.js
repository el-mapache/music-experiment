import { h } from 'preact';

const SearchRepoForm = () => {
  return (
    <div class="flex items-center -mx-2">
      <div class="m-2 my-0">
        <label for="repo" class="block font-bold text-xl text-indigo-700 mb-1">
          Repo name
        </label>
        <input id="repo" type="text" name="repo" placeholder="enter repo name" class="input" />
      </div>
      <div class="m-2 my-0">
        <label for="owner" class="block font-bold text-xl text-indigo-700 mb-1">
          Repo owner
        </label>
        <input id="owner" type="text" name="owner" placeholder="enter repo owner" class="input" />
      </div>
    </div>
  );
};

export default SearchRepoForm;
