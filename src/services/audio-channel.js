import AudioContextProvider from 'services/audio-context-provider';
import oscillator from 'services/oscillator';

// TODO: consider this as an instrument channel, as a vanilla audio
// audio channel would accept buffers, not raw nodes?

// TODO: this shows need for abstraction of audio node, since both oscillator
// and this channel node need gain functionality. or at least a gain decorator
const audioChannel = context => () => {
  const channelGain = context.createGain();
    
  channelGain.gain.value = 0.8;
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
