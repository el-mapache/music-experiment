import githubClient from 'services/github-client';
import sequencer from 'services/sequencer';
import buildScore from 'services/score-builder';
import recorder from './services/recorder';
import AudioContextProvider from './services/audio-context-provider';

const user = '18F';
let myRecorder;

const fetchRepos = async () => {
  const { data } = await githubClient.reposForUser(user);
  return data;
};
let lastData;

const playScore = (data) => {
  const score = buildScore(data);

  const radSequencer = sequencer({ bpm: 180, onDone: () => myRecorder.stop() });

  radSequencer.play(score);
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
    const data = stats.data.map(datum => datum.days);
    lastData = data;

    AudioContextProvider((context) => {
      const destination = context.createMediaStreamDestination();
      myRecorder = recorder({ stream: destination.stream });
      myRecorder.start();
    });

    playScore(data);
  });
};

const select = document.getElementById('repos');
const fragment = document.createDocumentFragment();

select.addEventListener('change', onRepoSelect);
document.querySelector('button').addEventListener('click', (event) => {
  event.preventDefault();
  if (lastData) {
    playScore(lastData);
  }
});

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

// every week is a measure. every event is a note. 
// more numbers in a row is faster?
// then 7 numbers in a row is really fast? like a triplet or something? 
// ( also something not accounted for in the sequencer)
// gotta pick everything randomly!
const data = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 3, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 0, 0],
];

// const score = buildScore(data);

// const radSequencer = sequencer({ bpm: 180 });

// radSequencer.play(score);



// const chordC5Power = ['C5', 'E6'].map(noteFactory);
// const a4 = noteFactory('A4');
// const g5 = noteFactory('G5');

// radSequencer.play(
//   [
//     {
//       node: a4,
//       noteType: NOTE_VALUES.QUARTER,
//     },
//     chordC5Power.reduce((memo, o) => { 
//       memo.push({
//         node: o,
//         noteType: NOTE_VALUES.QUARTER,
//       });

//       return memo;
//     }, []),
//     {
//       node: g5,
//       noteType: NOTE_VALUES.QUARTER,
//     },
//     {
//       node: noteFactory('A5'),
//       noteType: NOTE_VALUES.EIGHTH,
//     },
//     {
//       node: noteFactory('G5'),
//       noteType: NOTE_VALUES.EIGHTH,
//     },
//     {
//       node: noteFactory('A5'),
//       noteType: NOTE_VALUES.EIGHTH,
//     },
//     {
//       node: noteFactory('B4'),
//       noteType: NOTE_VALUES.EIGHTH,
//     },
//   ]
// );
