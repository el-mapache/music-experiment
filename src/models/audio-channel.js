import AudioContextProvider from 'services/audio-context-provider';

const defaultChannelGain = .65;

/**
 * 
 * Abstraction that groups audio nodes together. Nodes passed to the channel connect
 * to the channel's internal gain node, which then connects to the audio context's
 * destination
 * 
 * TODO: this shows need for abstraction of audio node, since both oscillator
 * and this channel node need gain functionality. or at least a gain decorator.
 * think like a linked list, where any given node is also a list?
 * 
 */
const audioChannel = context => ({ gain = defaultChannelGain } = {}) => {
  const channelGain = context.createGain();

  channelGain.gain.value = gain;
  channelGain.connect(context.destination);

  return {
    addNode(audioNode) {
      audioNode.connectTo(channelGain);
    },
    addNodes(audioNodes) {
      audioNodes.forEach((audioNode) => {
        audioNode.connectTo(channelGain);
      });
    },
    channel: channelGain
  };
};

export { audioChannel };
export default AudioContextProvider(audioChannel);
