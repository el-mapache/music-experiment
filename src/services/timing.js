import NOTE_VALUES from 'types/note-values';
import NOTE_BEAT_VALUES from 'types/note-beat-values';

const secondsPerMinute = 60;

/**
 * Convert beats-per-miinute to beats-per-second
 * 
 * @param {Number} bpm beats per minute
 * @returns {Number} beats per second
 */
const computeBeatsPerSecond = bpm => bpm / secondsPerMinute;

/**
 * 
 * @param {Number} bps Beats per second of audio
 * @param {Number} noteValue Base length of time a note occupies
 * @returns {Number} Float representing the real amount of time,
 *                   in seconds, a tone will sound for a given BPM
 */
const computeNoteLength = (bpm, rawBeatLength, beatLength) => (1 / bpm) * secondsPerMinute * (rawBeatLength / beatLength);

// TODO: still not accurately generating note values in time signatures
// other than 4 / 4?
// Or is it? technically the note values are sort of meaningless without a score,
// and this function does correctly determine the real length of time each note type
// would receive for a given BPM. I think the time signature is useless here
// as time signature doesn't affect the duration of the notes, just the types
// and distribution of them.
// For example, a quarter note will always take the same amount of time, whether it is
// in 6/8 or 4/4. The difference is that in 4/4 a quarter note represents one beat,
// but in 6/8 a quarter note must be dotted to fit into a single beat. However, that
// same quarter note is always worth 2 eighth notes, and those two eighth notes will
// always take the same amount of time to complete for a given BPM

/**
 * TIME SIGNATURE IS IMPORTANT!
 * Given this formula
 * 
 * (1 / 108) * 60  * (1/1.5)
 * 
 * 1 = 1 minute
 * 108 = our imaginary time signature
 * 1 = the base beat length of a quarter note
 * 1.5 = the actual number of quarter notes a single beat occupies
 * in 6/8 time
 * 
 * we need to know what the ratio the length of a quarter note and the length of
 * a beat is in a given time signature. in The example above, we assume 6/8 time. Since the
 * length of a beat is 1.5 quarter notes (3 8th notes), but the standard length of a quarter note is 1,
 * we need to divide the base note beat length by the actual note beat length of the time signature
 * @param {Number} bpm The beats per minute i.e. the tempo of the piece
 * @param {Meter} meter 
 */
const getNoteTimings = (bpm, beatLength = 1.5) => {
  return Object.entries(NOTE_VALUES).reduce((memo, [ key, value ]) => {
    memo[NOTE_VALUES[key]] = computeNoteLength(bpm, NOTE_BEAT_VALUES[value], beatLength);
    return memo;
  }, {});
};

export {
  computeBeatsPerSecond,
  computeNoteLength,
  getNoteTimings
};
export default getNoteTimings;
