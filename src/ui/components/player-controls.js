import { actions } from 'ui/actions';
import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { store } from 'ui/store';


const PlayControls = () => {
  const { dispatch, state } = useContext(store);
  const { commitData: { data }, player, activeRepo } = state;
  const unchecked = !data ? 'unchecked' : '';
  const active = player.status === 'playing' ? 'active' : '';
  const stopped = player.status === 'stopped';

  const handlePlayScore = () => {
    if (data) {
      actions.PLAYER.play(dispatch)(data);
    }
  };

  return (
    <div>
      <p>
        {
          (active || stopped) ? `Now playing: ${activeRepo.owner} — ${activeRepo.name}` : 'No repo loaded.'
        }
      </p>
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
