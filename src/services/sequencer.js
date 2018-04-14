import AudioContextProvider from './audio-context-provider';
import NOTE_VALUES from './note-values';

const secondsPerMinute = 60;

const computeBeatsPerSecond = bpm => bpm / secondsPerMinute;
const computeNoteLength = (bps, noteValue) => (1 / bps) * noteValue;

// Assumes a 4/4 time signature! Will want to make that variable as well
const computeNoteLengthMap = bps => ({
  [NOTE_VALUES.WHOLE]: computeNoteLength(bps, 4),
  [NOTE_VALUES.HALF]: computeNoteLength(bps, 2),
  [NOTE_VALUES.QUARTER]: computeNoteLength(bps, 1),
  [NOTE_VALUES.EIGHTH]: computeNoteLength(bps, .5),
  [NOTE_VALUES.SIXTEENTH]: computeNoteLength(bps, .25),
});

// This represents the running total of time since the sequencer started
// Necessary to correctly time when notes are played in series, i.e.,
// to ensure a note is played the correct amount of time after another
let offset = 0;

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

const defaultOnDone = () => console.log('finished playing');

const sequencer = context => ({ bpm = 120, onDone = defaultOnDone }) => {
  let noteValues = computeNoteLengthMap(computeBeatsPerSecond(bpm));

  return {
    play(noteGroups, bpm = null) {
      // tempo has changed, update length of each note type
      if (bpm) {
        noteValues = computeNoteLengthMap(computeBeatsPerSecond(bpm));
      }
      
      serial(noteGroups, this.run.bind(this), onDone);
    },

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
    run(notes, nextNoteFn) {
      const notesToPlay = Array.isArray(notes) ? notes : [notes];
      const now = context.currentTime;
      let timeTilNextNote = 0;

      console.log('current system time', now)

      notesToPlay.forEach(({ node, noteType }) => {
        const noteLength = noteValues[noteType];
        // Get the sustain of a note, and add it to the current time
        const noteDuration = node.duration//; + now;
        console.log('noteLength', noteLength);
        console.log('noteDuration', noteDuration);

        // We want to figure out what the shortest note in this chord is,
        // so we know when to schedule the next note

        // This determines which note in the chord is the longest, for use in
        // deriving when the next note in the overall song should be scheduled.
        // Neccessary as a note can sustain for longer
        // than the duration of time till the next note.
        // For example: In notated sheet music, a half-note `A` in the
        // bass with 3 16th notes in the treble are played as 4 16th notes,
        // but the A continues to sound as the next 3 notes are played.
        

        // if (noteDuration > noteLength) {
        //   timeTilNextNote = noteDuration;
        // } else {
        //   console.log('like this should always be 0.25')
        //   timeTilNextNote = noteLength
        // }

        timeTilNextNote = noteDuration+noteLength + now;

        // start should ramp gain up to current time, then play
        node.start(now);
        // stop should ramp gain down to stop time, then stop
        node.stop(noteDuration + noteLength + now);
      });
      
      console.log('note offset from system time', offset);
      console.log('initial time to next note', timeTilNextNote)
      const nextNoteTime = timeTilNextNote - offset;
      offset += nextNoteTime;
      console.log('offsest with note duration', offset, 'time til next note', nextNoteTime, '\n\n');
      
      setTimeout(nextNoteFn, nextNoteTime * 1000);
    }
  };
};

export { sequencer };
export default AudioContextProvider(sequencer);
