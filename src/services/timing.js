import NOTE_VALUES from 'types/note-values';
import NOTE_BEAT_VALUES from 'types/note-beat-values';

const secondsPerMinute = 60;

/**
 * 
 * @param {Number} bpm Beats per minute
 * @param {Number} rawBeatLength Length of a single beat in 4 / 4 time
 *  @example
 * @param {Number} beatLength The actual length of a beat for a given time signature
 * @returns {Number} Float representing the real amount of time,
 *                   in seconds, a tone will sound for a given BPM
 */
const computeNoteLength = (bpm, rawBeatLength, beatLength) => (1 / bpm) * secondsPerMinute * (rawBeatLength / beatLength);

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
  getNoteTimings
};
export default getNoteTimings;