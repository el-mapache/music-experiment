import NOTE_VALUES from 'types/note-values';
import NOTE_BEAT_VALUES from 'types/note-beat-values';

const secondsPerMinute = 60;

/**
 * 
 * @param {number} bpm beats per minute
 * @returns {number} beats per second
 */
const computeBeatsPerSecond = bpm => bpm / secondsPerMinute;

const computeNoteLength = (bps, noteValue) => (1 / bps) * noteValue;

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
const getNoteTimings = (bpm, timeSignature = [4,4]) => {
  const bps = computeBeatsPerSecond(bpm);

  return Object.entries.reduce((memo, { key, value }) => {
    memo[key] = computeNoteLength(bps, value);
    return memo;
  }, {});
};

export {
  computerBeatsPerSecond,
  computeNoteLength,
  getNoteTimings
};
export default getNoteTimings;
