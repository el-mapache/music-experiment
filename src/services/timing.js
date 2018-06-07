import NOTE_VALUES from 'types/note-values';

const secondsPerMinute = 60;

const computeBeatsPerSecond = bpm => bpm / secondsPerMinute;
const computeNoteLength = (bps, noteValue) => (1 / bps) * noteValue;

// still not accurately generating note values in time signatures
// other than 4 / 4
const getNoteTimings = (bpm, timeSignature = [4,4]) => {
  const bps = computeBeatsPerSecond(bpm);

  return {
    [NOTE_VALUES.WHOLE]: computeNoteLength(bps, 4),
    [NOTE_VALUES.HALF]: computeNoteLength(bps, 2),
    [NOTE_VALUES.QUARTER]: computeNoteLength(bps, 1),
    [NOTE_VALUES.EIGHTH]: computeNoteLength(bps, 0.5),
    [NOTE_VALUES.SIXTEENTH]: computeNoteLength(bps, 0.25),
  };
};

export {
  computerBeatsPerSecond,
  computeNoteLength,
  getNoteTimings
};
export default getNoteTimings;
