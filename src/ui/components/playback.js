import { actions } from 'ui/actions';
import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { store } from 'ui/store';
import CurrentTrack from 'ui/components/current-track';
import TimingInfo from 'ui/components/timing-info';

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
    <section class={`mt-8${!data ? ' hidden' : ''}`}>
      <CurrentTrack activeRepo={activeRepo} status={player.status} active={active} />
      <TimingInfo totalTime={data && data.totalTime} />
      <div class="mt-2" onClick={handlePlayScore}>
        <button class={`fill-button h-16 w-16 ${unchecked} ${active}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
            <polygon class="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
          </svg>
        </button>
      </div>
    </section>
  )
};

export default PlayControls;
