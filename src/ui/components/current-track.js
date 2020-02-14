import { h } from 'preact';
import { memo } from 'preact/compat';
import PLAYER_STATUS from 'ui/types/player-status';

const messageHandler = message => (owner, name) =>
  `${message}: ${owner} - ${name}`;

const DISPLAY_MESSAGES = {
  [PLAYER_STATUS.PLAYING]: messageHandler('Currently playing'),
  [PLAYER_STATUS.STOPPED]: messageHandler('You listened to'),
  [PLAYER_STATUS.PAUSED]: messageHandler('Paused'),
  [PLAYER_STATUS.IDLE]: () => 'No repo loaded.',
  [PLAYER_STATUS.READY]: messageHandler('Ready to play')
}

const CurrentTrack = ({ activeRepo = {}, status }) => {
  const messageFn = DISPLAY_MESSAGES[status];

  return (
    <h2 class="text-lg">
      {messageFn(activeRepo.owner, activeRepo.name)}
    </h2>
  );
};
const MemoCurrentTrack = memo(CurrentTrack, (prev, next) => {
  return prev.status === next.status && next.active;
});

export { CurrentTrack };
export default MemoCurrentTrack;
