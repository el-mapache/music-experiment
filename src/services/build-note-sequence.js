import buildNoteSequence from 'services/note-sequence';

const normalizeRepoStats = (data) => {
  /**
   * stats are returned as an array of objects.
   * The first key is the one we care about, `days`.
   * It is an array of 7 entries, with each entry corresponding
   * to the number of commits made to the repo on a day of the week.
   * Index 0 is sunday, 1 in monday, etc.
   */
  const normalized = data.map((datum) => {
    return {
      days: datum.days,
      count: datum.total || datum.count
    };
  });

  return normalized;
};

const buildSequence = (data) => {
  const normalized = normalizeRepoStats(data);

  return buildNoteSequence({
    commitStats: normalized,
    bpm: 168,
    timeSignature: [6, 8]
  });  
}

export default buildSequence;
