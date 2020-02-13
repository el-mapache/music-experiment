import { actions } from 'ui/actions';
import { h } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import { store } from 'ui/store';
import CurrentTrack from 'ui/components/current-track';
import TimingInfo from 'ui/components/timing-info';
import WaveViz from 'ui/viz/waves';
import usePrevious from 'ui/use-previous';

const PlayControls = () => {
  const { dispatch, state } = useContext(store);
  const { commitData: { data }, player, activeRepo } = state;
  const unchecked = !data ? 'unchecked' : '';
  const active = player.status === 'playing' ? 'active' : '';

  const lastPlayerStatus = usePrevious({ status: player.status, activeRepo });

  useEffect(() => {
    if (
      lastPlayerStatus.status === 'stopped' &&
      lastPlayerStatus.activeRepo.name !== activeRepo.name
    ) {
      dispatch(actions.PLAYER.resetCurrentTime());
    }
  }, [activeRepo]);

  const handlePlayScore = () => {
    if (data && !active) {
      actions.PLAYER.play(dispatch)(data);
    }
  };

  return (
    <section class={`mt-8${!data ? ' hidden' : ''}`}>
      <div class="flex">
        <div>
          <CurrentTrack activeRepo={activeRepo} status={player.status} active={active} />
          <TimingInfo totalTime={data && data.totalTime} globalCurrentTime={player.currentTime} />
          <div class="mt-2" onClick={handlePlayScore}>
            <button class={`fill-button h-16 w-16 ${unchecked} ${active}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                <polygon class="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <WaveViz active={active} />
        </div>
      </div>
    </section>
  )
};

export default PlayControls;
