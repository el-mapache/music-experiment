import githubClient from 'services/github-client';
import oscillator from 'services/oscillator';
import sequencer from 'services/sequencer';
import frequency from 'services/frequency';
import NOTE_VALUES from 'services/note-values';
import { parseCIDR } from 'ipaddr.js';

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

const chord = ['C5', 'E6'].map(note => frequency(note));
const radSequencer = sequencer(120);
const equallyRadOscillator = oscillator();
const choralOscillators = chord.map(frequency => oscillator({ frequency }));
// TODO: creation process of these nodes is super cumbersome!!!
const osc2 = oscillator({ frequency: frequency('G5') });

choralOscillators.forEach(o => o.connectTo(o.context.destination));
equallyRadOscillator.connectTo(equallyRadOscillator.context.destination);
osc2.connectTo(osc2.context.destination);

radSequencer.play(
  [
    {
      node: equallyRadOscillator,
      noteType: NOTE_VALUES.EIGHTH,
    },
    choralOscillators.reduce((memo, o) => { 
      memo.push({
        node: o,
        noteType: NOTE_VALUES.SIXTEENTH,
      });

      return memo;
    }, []),
    {
      node: osc2,
      noteType: NOTE_VALUES.EIGHTH,
    },
    {
      // TODO: obviously this plays but throws an error since you cant reuse oscillator nodes
      node: osc2,
      noteType: NOTE_VALUES.EIGHTH,
    },
  ]
);
