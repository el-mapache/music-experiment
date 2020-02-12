import { actions } from 'ui/actions';
import { h } from 'preact';
import { memo } from 'preact/compat';
import { useContext } from 'preact/hooks';
import { store } from 'ui/store';
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

const CurrentTrack = ({ activeRepo, status }) => {
  const messageFn = DISPLAY_MESSAGES[status];

  return (
    <p>
      {messageFn(activeRepo.owner, activeRepo.name)}
    </p>
  );
};
const MemoCurrentTrack = memo(CurrentTrack, (prev, next) => {
  return prev.status === next.status && next.active;
});

const PlayControls = () => {
  const { dispatch, state } = useContext(store);
  const { commitData: { data }, player, activeRepo } = state;
  const unchecked = !data ? 'unchecked' : '';
  const active = player.status === 'playing' ? 'active' : '';

  const handlePlayScore = () => {
    if (data) {
      actions.PLAYER.play(dispatch)(data);
    }
  };

  return (
    <div>
      <MemoCurrentTrack activeRepo={activeRepo} status={player.status} active={active} />
      <div class="mt-2" onClick={handlePlayScore}>
        <button class={`fill-button h-16 w-16 ${unchecked} ${active}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
            <polygon class="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
          </svg>
        </button>
      </div>
    </div>
  )
};

export default PlayControls;
