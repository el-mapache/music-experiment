// A above middle C resides in the 4th octave
const BASE_OCTAVE = 4;
// value (in Hz) of A above middle C
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
// above middle C. Half steps are given as a negative number.
// This map shouldn't be used directly! Its purpose is to help
// compute the relative number of half steps towards or away
// from A4
// TODO: do some math to confirm below reasoning
// We move negatively away from A because it ensures we
// account for half steps when jumping around octaves
const noteHalfSteps = {
  'C': -9,
  'D': -7,
  'E': -5,
  'F': -4,
  'G': -2,
  'A': 0,
  'B': 2,
};
const noteModifiers = {
  'b': -1,
  '#': 1,
  undefined: 0,
};
// Notes have to be capitalized to allow for a proper flat (b)
const validNoteRegex = /([CDEFGAB]){1}(b|#)?([0-9]){1}/;

/**
 * 
 * @param {Number} octave 
 * @return Number distance from BASE_OCTAVE
 */
const findOctaveDistance = (octave) => {
  // If the current octave is equal to the base octave, we don't
  // have to do anything!
  let distance = 0;

  if (octave < BASE_OCTAVE) {
    // Supplied octave is less than base_octave, return a negative number so
    // the number of half steps between the note this octave is attached to
    // and A4 can be correctly derived
    distance = -(BASE_OCTAVE - octave);
  } else if (octave > BASE_OCTAVE) {
    distance = octave - BASE_OCTAVE;
  }

  return distance;
};

/**
 *
 * @param {String} note
 * @param {String} modifier sharp (#) or flat (b)
 *
 * Given a note and a pitch modifier, returns the correct name of the note
 * Accounts for the single semitone between B and C, and E and F
 */
const normalizeSemitones = (note, modifier) => {
  let normalized = NOTES[note];

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

  const [_, note, pitchModifier, octave] = matches;
  const octaveDistance = findOctaveDistance(octave);
  const normalizedNote = normalizeSemitones(note, pitchModifier);

  return noteHalfSteps[normalizedNote] + noteModifiers[pitchModifier] + (octaveDistance * 12);
};

/**
 * 
 * Get the actual frequency of a note
 * @param {String} noteString representation of a note in the format 'Note + #|b + octave'
 * @return frequency float rounded to 2 significant digits
 * 
 */
const frequency = (noteString) => {
  if (!noteString) {
    return .0;
  }

  const stepsFromA = getSteps(noteString);
  const rawFrequency = A_ABOVE_MIDDLE_C * Math.pow(EVEN_TEMPERED_RATIO, stepsFromA);

  // truncate float to 2 digits after the decimal and round them.
  // e.g. G7 -> 3135.9634878539955 -> 3135.96
  return parseFloat(rawFrequency.toFixed(2));
};

export default frequency;
