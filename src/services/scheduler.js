import AudioContextProvider from './audio-context-provider';

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
};

const subscribers = {
  'timer': [],
  'sound': [] 
};

const getWebAudioTime = (now, totalPlayTime) => now - totalPlayTime;
const notifyTimerSubs = (now, total) => ({
  tick: getWebAudioTime(now, total)
});

let playingTime = 0;

const scheduler = context => () => {
  return {
    now() {
      return context.currentTime;
    },
    subscribe(name, handler) {
      if (!name) {
        throw new TypeError('.subscribe requires a key to reference.');
      }

      if (typeof handler !== 'function') {
        throw new TypeError('.subscribe requires a function as its second argument.');
      }

      if (name in subscribers) {
        subscribers[name] = subscribers[name].concat([handler]);
      }
    },
    play(sequence) {
      if (context.state === 'suspended' || context.state !== 'running') {
        context.resume();
      }

      const toNotify = subscribers.timer;

      return new Promise((resolve) => {
        const playTimeCounter = setInterval(() => {
          toNotify.forEach((fn) => fn(notifyTimerSubs(this.now(), playingTime)));
        }, msPerSecond);
          
        serial(sequence, this.run.bind(this), () => {
          toNotify.forEach((fn) => fn(notifyTimerSubs(this.now(), playingTime)));
          clearInterval(playTimeCounter);
          playingTime = this.now();
          context.suspend();


          resolve();
        });

        toNotify.forEach((fn) => fn(notifyTimerSubs(this.now(), playingTime)));
      });
    },

    /**
     * should be able to fix timing problems by getting delta of
     * currenttime and last sound event or whatever, if it is 1 second
     * notify subscribers.
     * it still wont be truly accurate but I cant get that till i rewrite
     * the scheduler to not use setTimeout
     */
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
      const now = this.now();
      const toNotify = subscribers.sound;
      
      let timeTilNextNote = 0;

      tonesToPlay.forEach((tone) => {
        toNotify.forEach((s) => s({ chord: tone }));
        const { timing, duration } = tone;
        const humanized = humanize(now + duration); 

        // We want to figure out what the shortest note in this chord is,
        // so we know when to schedule the next note.

        // Neccessary as a note can sustain for longer
        // than the duration of time till the next note.
        // For example: In notated sheet music, a half-note `A` in the
        // bass with 3 16th notes in the treble are played as 4 16th notes,
        // but the A continues to sound as the next 3 notes are played.
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

export { scheduler };
export default AudioContextProvider(scheduler);
