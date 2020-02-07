const { sequences } = core;
const { MusicRNN } = music_rnn;

const makeMelodyModel = () => {
  const model = new MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/basic_rnn');
  return new Promise((resolve) => {
    model.initialize()
      .then(() => resolve({
        model,
        sequences
      }));
  });
};

export default makeMelodyModel
