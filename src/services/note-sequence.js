import Tone from 'models/tone';
import Meter from 'models/meter';
import Chord from 'services/chord';
import NOTE_VALUES from 'types/note-values';

const MAX_VOLUME = 40;

const defaultNoteDuration = (timeSignature) => {
  const baselineDuration = timeSignature[1];

  switch(baselineDuration) {
    case 2:
      return NOTE_VALUES.HALF;
    case 4:
      return NOTE_VALUES.QUARTER;
    case 8:
      return NOTE_VALUES.EIGHTH;
    default:
      return NOTE_VALUES.QUARTER;
  }
};

// this need to be based on the time signature too, otherwise
// we end up with 6/8 time signature and a bunch of whole notes
// TODO FIX THIS CAUSE THIS IS THE MISSING PIECE ATM
const getNoteValue = (speed, timeSignature = [4,4]) => {

  let value = defaultNoteDuration(timeSignature);

  if (speed < 2) {
    value = NOTE_VALUES.WHOLE;
  } else if (speed > 2 && speed < 10) {
    value = NOTE_VALUES.HALF;
  } else if (speed > 10 && speed < 40) {
    value = NOTE_VALUES.QUARTER;
  } else if (speed > 40) {
    value = NOTE_VALUES.EIGHTH;
  }

  return value;
};

// Chord is sort of a misnomer here. It can be a single note, a group
// of notes, or a silence. The chord refers more to a discrete
// unit of musical activity
const makeChords = data =>
  data.reduce((chords, datum) => {
    const { days, count } = datum;
    const chord = new Chord({
      volume: Math.min(count, MAX_VOLUME) / 100
    });
    
    chord.addNotes(days);
    chords.push(chord);

    return chords;
  }, []);


// why am i mapping everything so many times
const buildNoteSequence = ({ commitStats, timeSignature, bpm }) => { 
  let startTime = 0;
  let finalTime = 0;

  const meter = new Meter({ timeSignature, tempo: bpm });
  const chords = makeChords(commitStats);
  const toneClusters = chords.reduce((clusters, cluster) => {
    const { volume, speed } = cluster;
    const clusterLen = cluster.notes.length;
    const fractionalVolume = volume / (clusterLen * 2);
    const noteType = getNoteValue(speed, meter.timeSignature);
    const noteTiming = meter.getTimeForNote(noteType);
    /**
     * Reset chord time at each iteration so that the overall
     * length of the piece is not counted per tone, but per tone cluster
     * For example, if a cluster has 7 tones, we want each of those
     * tones to account for a single unit of time when calculating the
     * total length of the song.
    */
    let clusterTime = 0;
    cluster.notes = cluster.notes.map((note) => {
      const tone = new Tone({
        noteName: note,
        timing: noteTiming,
        peak: fractionalVolume,
        noteType: noteType,
      });

      // All tones in a chord occupy the same start point in time
      tone.addTimingInfo(clusterTime);
      if (!clusterTime || tone.endTime < clusterTime) {
        clusterTime = tone.endTime;
      }

      return tone;
    });

    startTime += clusterTime;
    finalTime += startTime;

    cluster.totalTime = finalTime;
    clusters.push(cluster);

    return clusters;
  }, []);

  return {
    toneClusters,
    totalTime: finalTime / toneClusters.length
  };
};

export default buildNoteSequence;
