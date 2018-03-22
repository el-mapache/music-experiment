import AudioContextProvider from 'audio-context-provider';

const secondsPerMinute = 60;

const computeBeatsPerSecond = bpm => bpm / secondsPerMinute;
const computeNoteLength = (bps, noteValue) => (1 / bps) * noteValue;

// Assumes a 4/4 time signature! Will want to make that variable as well
const computeNoteLengthMap = bps => ({
  'whole': computeNoteLength(bps, 4),
  'half': computeNoteLength(bps, 2),
  'quarter': computeNoteLength(bps, 1),
  'eighth': computeNoteLength(bps, .5),
  'sixteenth': computeNoteLength(bps, .25),
});

const serial = (data, handler, onDone) => {
  function next() {
    const nextData = data.shift();

    if (!nextData) {
      return onDone();
    }

    return handler(nextData, next);
  };

  next();
};


const sequencer = context => (bpm) => {
  let noteValues = computeNoteLengthMap(computeBeatsPerSecond(bpm));

  return {
    /**
     * 
     * @param { AudioNodeObject | Array[AudioNodeObjects] } notes 
     * @param { Number } bpm
     * 
     * Given one or several AudioNode objects, play them all at the current time,
     * for the length of time indicated by the object
     * TODO: Should this be a note object that inherits from an audionode object,
     * and provides its length?
     */
    play(noteGroups, bpm = null) {
      // tempo change requested, update length of each note type
      if (bpm) {
        noteValues = computeNoteLengthMap(computeBeatsPerSecond(bpm));
      }
      
      serial(noteGroups, sequencer.run, () => {
        console.log('finished playing');
      });
    },

    run(notes, nextNoteFn) {
      const notesToPlay = Array.isArray(notes) ? notes : [notes];
      const now = context.currentTime;

      notesToPlay.forEach(({ node, noteType }) => {
        const noteLength = noteValues[noteType];

        // We want to figure out what the shortest note in this chord is,
        // so we know when to schedule the next note

        // TODO: really there has to be the concept of sustain time in
        // addition to note length, since a note can sustain for longer
        // than the duration of time till the next note.
        // For example: In notated sheet music, a half-note `A` in the
        // bass with 3 16th notes in the treble are played as 4 16th notes,
        // but the A continues to sound as the next 3 notes are played.
        if (noteLength < shortestNoteTime) {
          shortestNoteTime = noteLength;
        }

        // start should ramp gain up to current time, then play
        node.start(now);
        // stop should ramp gain down to stop time, then stop
        node.stop(now + noteValues[noteType]);
      });

      const timeToNextNote = shortestNoteTime * 1000;
      setTimeout(playNextNote, timeToNextNote);
    }
  };
};

export { sequencer };
export default AudioContextProvider(sequencer);


/**
 * song = [
 *  [note1, note2],
 *  [note1]
 *  [note1],
 *  [note1....noteN]
 *  etc
 * ]
 * 

serial(song, sequencer.run, donehandler)
 */
