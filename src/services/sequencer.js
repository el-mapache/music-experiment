import AudioContextProvider from './audio-context-provider';
import { getNoteTimings } from './timing';

const msPerSecond = 1000;

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

const humanize = (time) => {
  return time - .01 / 2 + Math.random() * .01;
}

const sequencer = context => () => {
  return {
    play(sequences) {
      if (context.state ==='suspended' || context.state !== 'running') {
        context.resume();
      }

      return new Promise((resolve) => {
        sequences.forEach(sequence =>
          serial(sequence, this.run.bind(this), resolve)
        );
      });
    },

    /**
     * Schedules when to play notes
     * @param {Chord} An instance of the chord class
     * @param {Number} bpm
     *
     * Given one or several AudioNode objects, play them all at the current time,
     * for the length of time indicated by the object
     */
    run(chord, nextNoteFn) {
      const tonesToPlay = chord.oscillators;
      const now = context.currentTime;
      let timeTilNextNote = 0;

      tonesToPlay.forEach((tone) => {
        const { timing, duration } = tone;
        const humanized = humanize(now + duration);
        // We want to figure out what the shortest note in this chord is,
        // so we know when to schedule the next note.

        // Neccessary as a note can sustain for longer
        // than the duration of time till the next note.
        // For example: In notated sheet music, a half-note `A` in the
        // bass with 3 16th notes in the treble are played as 4 16th notes,
        // but the A continues to sound as the next 3 notes are played.
        // TODO: this double if thing feel reaaaal clunky
        if (!timeTilNextNote) {
          timeTilNextNote = timing;
        }

        if (timing < timeTilNextNote) {
          timeTilNextNote = timing
        }

        // start should ramp gain up to current time, then play
        tone.osc.start(now);
        // stop should ramp gain down to stop time, then stop
        tone.osc.stop(humanized + timing);
      });

      setTimeout(nextNoteFn, timeTilNextNote * msPerSecond);
    }
  };
};

export { sequencer };
export default AudioContextProvider(sequencer);
