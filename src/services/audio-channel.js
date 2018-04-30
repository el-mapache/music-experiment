import AudioContextProvider from 'services/audio-context-provider';
import oscillator from 'services/oscillator';

const defaultChannelGain = .1;

const processor = context => context.createScriptProcessor(4096, 1, 1);

// TODO: consider this as an instrument channel, as a vanilla audio
// audio channel would accept buffers, not raw nodes?

// TODO: this shows need for abstraction of audio node, since both oscillator
// and this channel node need gain functionality. or at least a gain decorator
const audioChannel = context => ({ gain = defaultChannelGain } = {}) => {
  const channelGain = context.createGain();
  const processorNode = processor(context);

  channelGain.connect(processorNode);
  //processorNode.connect(context.destination);
  //processorNode.onaudioprocess = (event) => console.log(event.inputBuffer, event.outputBuffer.getChannelData(0));

  channelGain.gain.value = gain;
  channelGain.connect(context.destination);

  return {
    add(audioNodes) {
      const nodes = Array.isArray(audioNodes) ? audioNodes : [audioNodes];

      nodes.forEach((audioNode) => {  
        audioNode.connectTo(channelGain);
      });
    }
  };
};

export { audioChannel };
export default AudioContextProvider(audioChannel);
