
const scoreDataA = [
  [0, 7, 4, 1, 11, 0, 0],
  [0, 7, 0, 1, 0, 3, 0],
  [0, 1, 0, 8, 14, 2, 0],
  [0, 3, 6, 0, 1, 0, 0],
  [0, 2, 0, 0, 5, 0, 0],
  [0, 0, 5, 3, 2, 0, 0],
  [0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 5, 3, 0],
  [0, 6, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 1, 0],
  [0, 4, 2, 6, 5, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 3, 1, 8, 0],
  [0, 5, 0, 0, 0, 1, 0],
  [0, 3, 2, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 3, 0],
  [0, 5, 3, 3, 1, 0, 0],
  [0, 7, 1, 2, 0, 4, 0],
  [0, 0, 5, 5, 5, 8, 0],
  [0, 4, 2, 1, 0, 1, 0],
  [0, 5, 5, 8, 0, 0, 0],
  [0, 2, 2, 4, 1, 0, 0],
  [1, 2, 4, 5, 1, 0, 0],
  [0, 1, 3, 4, 0, 0, 0],
  [0, 2, 0, 0, 0, 1, 0],
  [0, 2, 2, 0, 1, 2, 0],
  [0, 1, 1, 0, 2, 0, 0],
  [0, 0, 0, 12, 1, 0, 0],
  [0, 1, 0, 1, 5, 2, 0],
  [0, 3, 0, 0, 0, 0, 0],
  [0, 0, 2, 1, 2, 2, 0],
  [0, 0, 2, 2, 0, 0, 0],
  [0, 17, 1, 3, 2, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 1, 0],
  [0, 0, 1, 2, 1, 1, 0],
  [0, 3, 0, 4, 1, 0, 0],
  [0, 0, 4, 2, 0, 0, 0],
  [0, 4, 1, 1, 2, 2, 0],
  [0, 0, 3, 3, 6, 0, 0],
  [0, 0, 5, 0, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 0],
  [0, 0, 3, 6, 2, 0, 0],
  [0, 0, 3, 8, 0, 0, 0],
  [0, 0, 2, 2, 3, 0, 0],
  [0, 4, 4, 2, 2, 0, 0],
  [0, 2, 0, 0, 3, 0, 0],
  [0, 4, 5, 0, 0, 1, 0],
  [0, 0, 0, 1, 2, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0],
];

const tockData = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 3, 1, 1, 0],
  [0, 0, 0, 0, 2, 1, 0],
  [0, 7, 4, 3, 5, 4, 0],
  [0, 0, 0, 5, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 3, 0, 2, 0],
  [0, 0, 0, 0, 0, 2, 0],
  [0, 0, 0, 0, 0, 1, 0],
  [0, 0, 2, 3, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 4, 0],
  [0, 0, 0, 3, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 5, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 3, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 11, 0],
  [0, 0, 3, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 1, 2, 0, 0],
  [0, 6, 3, 7, 6, 20, 0],
  [0, 2, 1, 3, 4, 0, 0],
  [0, 2, 1, 4, 4, 0, 0],
  [0, 0, 1, 5, 3, 0, 0],
  [0, 0, 6, 9, 6, 4, 0],
  [0, 0, 1, 1, 18, 6, 0],
  [0, 12, 10, 7, 14, 3, 0],
  [0, 0, 0, 2, 1, 3, 0],
  [1, 10, 6, 5, 13, 8, 0],
  [0, 3, 3, 11, 3, 0, 0],
  [0, 7, 6, 3, 0, 2, 0],
  [0, 6, 2, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
]

export {
  scoreDataA
};