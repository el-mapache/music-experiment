const path = require('path');
const { sequences } = core;
const { MusicRNN } = music_rnn;
const RNN_MODEL_URI = 'https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/melody_rnn';

let model;
const makeMelodyModel = () => {
  if (!model) {
    model = new MusicRNN(RNN_MODEL_URI);
  }

  return new Promise((resolve) => {
    model.initialize()
      .then(() => resolve({
        model,
        sequences,
      }));
  });
};

export default makeMelodyModel
