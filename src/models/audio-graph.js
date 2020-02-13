import audioChannel from 'services/audio-channel';
import oscillator from 'services/oscillator';

const AudioGraph = (sequence) => {
  const channel = audioChannel();

  sequence.toneClusters.forEach((toneCluster) => {
    toneCluster.oscillators = toneCluster.notes.map(note => {
        const osc = oscillator(note);
        osc.connectTo(osc.context.destinationStream);
        channel.addNode(osc);

        return {
          osc,
          timing: note.timing,
          duration: note.duration,
          endTime: note.endTime
        };
      });
  });

  return sequence;
};

export default AudioGraph;
