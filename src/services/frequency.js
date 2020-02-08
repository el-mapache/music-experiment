// A above middle C resides in the 4th octave
const BASE_OCTAVE = 4;
// value (in Hz) of A above middle C
const A_ABOVE_MIDDLE_C = 440;
// The above note value expressed as a MIDI number
const MIDI_A4 = 69;
// represents 1/12th of an octave, the distance between all notes
// in an equal temperment system
const EVEN_TEMPERED_RATIO = Math.pow(2, (1/12));
const NOTES_PER_OCTAVE = 12;
const SILENCE = .01;
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
// from A4.
// We move negatively away from A because it ensures we
// account for half steps when jumping around octaves
const NOTE_HALF_STEPS = {
  'C': -9,
  'D': -7,
  'E': -5,
  'F': -4,
  'G': -2,
  'A': 0,
  'B': 2,
};
const NOTE_ACCIDENTALS = {
  'b': -1,
  '#': 1,
  undefined: 0,
};
// Notes have to be capitalized to allow for a proper flat (b)
const NOTE_REG_EXP = /([CDEFGAB]){1}(b|#)?([0-9]){1}/;

/**
 * 
 * @param {Number} octave 
 * @return Number octave number distance from BASE_OCTAVE
 * 
 * @example For example:
 * octave of 4 -> distance of 0 : octave is the same as A4
 * octave of 6 -> distance of 2 : octave is 2 octaves higher than A4
 * octave of 2 -> distance of -2 : octave is 2 octaves lower than A4
 */
const computeOctaveDistance = (octave) => {
  // If the current octave is equal to the base octave, we don't
  // have to do anything!
  let distance = 0;

  if (octave < BASE_OCTAVE) {
    // When the supplied octave is less than base_octave, we 
    // return a negative number so the number of half steps
    // between the octave in which this note falls and A4
    // can be correctly derived
    distance = -(BASE_OCTAVE - octave);
  } else if (octave > BASE_OCTAVE) {
    distance = octave - BASE_OCTAVE;
  }

  return distance * NOTES_PER_OCTAVE;
};

/**
 * Given a note and a pitch modifier, returns the correct name of the note
 * Accounts for the single semitone between B and C, and E and F.
 * @param {String} note
 * @param {String} modifier sharp (#) or flat (b)
 *
 */
const resolveEnharmonics = (note, modifier) => {
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
};

/**
 * Compute the number of half steps away from A4
 * @param {String} noteString The name of the string expressed in standard musical notation e.g. E4
 * @returns Number The distance of this note from A4 expressed as a number of half steps
 */
const getStepsFromA4 = (noteString) => {
  const matches = NOTE_REG_EXP.exec(noteString);

  if (!matches) {
    throw new Error('Note string must be in the format {[C-B]}{b|#}{0-9}');
  }

  const [_, note, pitchModifier, octave] = matches;
  const octaveDistance = computeOctaveDistance(octave);
  const normalizedNote = resolveEnharmonics(note, pitchModifier);

  return NOTE_HALF_STEPS[normalizedNote] + NOTE_ACCIDENTALS[pitchModifier] + octaveDistance;
};

/**
 * 
 * Get the actual frequency of a note. If no note string is supplied, silence is assumed
 * @param {String} noteString representation of a note in the format 'Note + #|b + octave'
 * @return frequency float rounded to 2 significant digits
 * 
 */
const frequency = (noteString) => {
  if (!noteString) {
    return SILENCE;
  }

  // get number of half steps the supplied note is A4
  const stepsFromA = getStepsFromA4(noteString);
  const rawFrequency = A_ABOVE_MIDDLE_C * Math.pow(EVEN_TEMPERED_RATIO, stepsFromA);

  // truncate float to 2 digits after the decimal and round them.
  // e.g. G7 -> 3135.9634878539955 -> 3135.96
  return parseFloat(rawFrequency.toFixed(3));
};

/**
 * Convert a frequency to MIDI
 * @param {Number} frequency A float representing a note's frequency in an even-tempered scale
 * @returns {Number} A number between 0-127 (inclusive) representing the frequency's MIDI number
 */
const toMIDI = (frequency) => {
  if (frequency === 0.01) {
    return 0;
  }

  return 12 * Math.log2(frequency / A_ABOVE_MIDDLE_C) + MIDI_A4 | 0;
};

/**
 * Convert from MIDI note to a frequency
 * @param {Number} midiNumber Corresponds to a frequency on an even-tempered scale
 * @return {Number} The note's frequency
 */
const fromMIDI = (midiNumber) => {
  return Math.pow(2, (midiNumber - MIDI_A4) / 12) * A_ABOVE_MIDDLE_C
};

export { toMIDI, fromMIDI };
export default frequency;
