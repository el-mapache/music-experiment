import AudioContextProvider from './audio-context-provider';
import { getNoteTimings } from './timing';

const msPerSecond = 1000;
const defaultOnDone = () => {
  console.log('finished playing');
}

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

// TODO: this should accept noteGroups.
// sequences.
// basically, the sequences needs to have a time signature associated with
// them, then in the play function we can get those timings
const sequencer = context => ({ bpm = 120, onDone = defaultOnDone }) => {
  let noteValues = getNoteTimings(bpm);

  function hasChangedBPM(newBPM = null) {
    return newBPM && newBPM !== bpm;
  }
  
  return {
    play(sequences, newBPM = null) {
      if (context.state ==='suspended' || context.state !== 'running') {
        context.resume();
      }

      // tempo has changed, update length of each note type
      if (hasChangedBPM(newBPM)) {
        noteValues = getNoteTimings(newBPM);
      }

      sequences.forEach(sequence => serial(sequence, this.run.bind(this), onDone));
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

      notesToPlay.forEach(({ node, noteType, beatLength }) => {
        const noteLength = noteValues[noteType];
        // Get the sustain of a note, and add it to the current time
        const noteDuration = node.duration + now;

        // We want to figure out what the shortest note in this chord is,
        // so we know when to schedule the next note.

        // Neccessary as a note can sustain for longer
        // than the duration of time till the next note.
        // For example: In notated sheet music, a half-note `A` in the
        // bass with 3 16th notes in the treble are played as 4 16th notes,
        // but the A continues to sound as the next 3 notes are played.
        // TODO: this double if thing feel reaaaal clunky
        if (!timeTilNextNote) {
          timeTilNextNote = noteLength;
        }

        if (noteLength < timeTilNextNote) {
          timeTilNextNote = noteLength
        }

        // start should ramp gain up to current time, then play
        node.start(now);
        // stop should ramp gain down to stop time, then stop
        node.stop(noteDuration + noteLength);
      });

      setTimeout(nextNoteFn, timeTilNextNote * msPerSecond);
    }
  };
};

export { sequencer };
export default AudioContextProvider(sequencer);
