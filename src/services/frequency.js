// A above middle C resides in the 4th octave
const BASE_OCTAVE = 4;
const A_ABOVE_MIDDLE_C = 440;
// represents 1/12th of an octave, the distance between all notes
// in an equal temperment system
const EVEN_TEMPERED_RATIO = Math.pow(2, (1/12));
const NOTES = {
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
  A: 'A',
  B: 'B',
};
// All half steps assume a distance from A4, that is, the A
// above middle C. Half steps are given as a positive number.
// This map shouldn't be used directly. Its purpose is to help
// compute the relative number of half steps towards or away
// from A4
const noteHalfSteps = {
  'C': 3,
  'D': 5,
  'E': 7,
  'F': 8,
  'G': 10,
  'A': 12,
  'B': 14,
};
const noteModifiers = {
  'b': -1,
  '#': 1,
  undefined: 0,
};
const validNoteRegex = /([CDEFGAB]){1}(b|#)?([0-9]){1}/;

const findOctaveDistance = (octave) => {
  // If the current octave is equal to the base octave, we don't
  // have to do anything!
  let distance = 1;

  if (octave < BASE_OCTAVE) {
    distance = BASE_OCTAVE - octave;
  } else if (octave > BASE_OCTAVE) {
    distance = octave - BASE_OCTAVE;
  }

  return distance;
};

const normalizeSemitones = (note, modifier) => {
  let normalized;

  // special rules to handle E-F and B-C
  if (note === NOTES.B && modifier === '#') {
    normalized = NOTES.C;
  } else if (note === NOTES.C && modifier === 'b') {
    normalized = NOTES.B
  } else if (note === NOTES.E && modifier === '#') {
    normalized = NOTES.F;
  } else if (note === NOTES.F && modifier === 'b') {
    normalized = NOTES.E;
  }

  return normalized;
}


const getSteps = (noteString) => {
  const matches = validNoteRegex.exec(noteString);

  if (!matches) {
    throw new Error('Note string must be in the format {[C-B]}{b|#}{0-9}');
  }

  let note = matches[1];
  const modifier = matches[2];
  const octave = matches[3];

  const octaveDistance = findOctaveDistance(octave);
  note = normalizeSemitones(note, modifier);

  return noteHalfSteps[note] + noteModifiers[modifier] * octaveDistance;
};

const frequency = (stepsFromA) => {
  return A_ABOVE_MIDDLE_C * Math.pow(EVEN_TEMPERED_RATIO, stepsFromA);
};

export default frequency;
