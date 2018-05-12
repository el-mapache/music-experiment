import NOTE_VALUES from 'types/note-values';

const secondsPerMinute = 60;

const computeBeatsPerSecond = bpm => bpm / secondsPerMinute;
const computeNoteLength = (bps, noteValue) => (1 / bps) * noteValue;

// still not accurately generating note values in time signatures
// other than 4 / 4
const getNoteTimings = (bpm, timeSignature = [4,4]) => {
  const bps = computeBeatsPerSecond(bpm);
  const wholeValue = timeSignature[0];
  const halfValue = wholeValue / 2;
  const quarterValue = halfValue / 2;
  const eighthValue = quarterValue / 2;
  const sixteenthValue = eighthValue / 2; 

  return {
    [NOTE_VALUES.WHOLE]: computeNoteLength(bps, wholeValue),
    [NOTE_VALUES.HALF]: computeNoteLength(bps, halfValue),
    [NOTE_VALUES.QUARTER]: computeNoteLength(bps, quarterValue),
    [NOTE_VALUES.EIGHTH]: computeNoteLength(bps, eighthValue),
    [NOTE_VALUES.SIXTEENTH]: computeNoteLength(bps, sixteenthValue),
  };
};

export {
  computerBeatsPerSecond,
  computeNoteLength,
  getNoteTimings
};
export default getNoteTimings;
