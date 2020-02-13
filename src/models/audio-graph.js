import audioChannel from 'services/audio-channel';
import analyser from 'models/analyser';
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
          noteName: note.noteName,
          frequency: note.frequency,
          peak: note.peak,
          timing: note.timing,
          duration: note.duration,
          endTime: note.endTime
        };
      });
  });

  channel.channel.connect(analyser({ fftSize: 128 }));
  analyser.connect(analyser.context.destination);

  return {
    channel,
    analyser,
    sequence
  };
};

class Graph {
  constructor(fftSize) {
    this.output = audioChannel();
    this.analyser = analyser({ fftSize });

    this.output.channel.connect(this.analyser);
    this.analyser.connect(this.analyser.context.destination);
  }

  build(sequence) {
    sequence.toneClusters.forEach((toneCluster) => {
      toneCluster.oscillators = toneCluster.notes.map(note => {
          const osc = oscillator(note);
          osc.connectTo(osc.context.destinationStream);
          this.output.addNode(osc);
  
          return {
            osc,
            noteName: note.noteName,
            frequency: note.frequency,
            peak: note.peak,
            timing: note.timing,
            duration: note.duration,
            endTime: note.endTime
          };
        });
    });
  
    return sequence;
  }
}

export { Graph };
export default AudioGraph;
