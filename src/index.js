import githubClient from 'services/github-client';
import oscillator from 'services/oscillator';
import sequencer from 'services/sequencer';
import frequency from 'services/frequency';
import noteFactory from 'services/note-factory';
import NOTE_VALUES from 'services/note-values';

const user = 'el-mapache';

const fetchRepos = async () => {
  const { data } = await githubClient.reposForUser(user);
  return data;
};

const onRepoSelect = (event) => {
  const { value: repo } = event.target;

  githubClient.getRepoStats(user, repo)
  .then((stats) => {
    /**
     * stats are returned as an array of objects.
     * The first key is the one we care about, `days`.
     * It is an array of 7 entries, with each entry corresponding
     * to the number of commits made to the repo on a day of the week.
     * Index 0 is sunday, 1 in monday, etc.
     */
    console.log(stats)
  });
};

const select = document.getElementById('repos');
const fragment = document.createDocumentFragment();

select.addEventListener('change', onRepoSelect);

fetchRepos().then((repos) => {
  repos.forEach((repo) => {
    const { name } = repo;
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
  
    fragment.appendChild(option);
  });
  
  select.appendChild(fragment);
});

const radSequencer = sequencer({ bpm: 120 });

const chordC5Power = ['C5', 'E6'].map(noteFactory);
const a4 = noteFactory('A4');
const g5 = noteFactory('G5');

radSequencer.play(
  [
    {
      node: a4,
      noteType: NOTE_VALUES.QUARTER,
    },
    chordC5Power.reduce((memo, o) => { 
      memo.push({
        node: o,
        noteType: NOTE_VALUES.QUARTER,
      });

      return memo;
    }, []),
    {
      node: g5,
      noteType: NOTE_VALUES.QUARTER,
    },
    {
      node: noteFactory('A5'),
      noteType: NOTE_VALUES.EIGHTH,
    },
    {
      node: noteFactory('G5'),
      noteType: NOTE_VALUES.EIGHTH,
    },
    {
      node: noteFactory('A5'),
      noteType: NOTE_VALUES.EIGHTH,
    },
    {
      node: noteFactory('B4'),
      noteType: NOTE_VALUES.EIGHTH,
    },
  ]
);
