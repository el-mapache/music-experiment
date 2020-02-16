import { actions } from 'ui/actions';
import { h } from 'preact';
import { useContext, useEffect, useCallback } from 'preact/hooks';
import { store } from 'ui/store';
import CurrentTrack from 'ui/components/current-track';
import TimingInfo from 'ui/components/timing-info';
import BarViz from 'ui/viz/bars';
import Canvas from 'ui/components/canvas';
import usePrevious from 'ui/hooks/use-previous';
import Fade from 'ui/components/fade';

const vizSettings = {
  height: 100,
  width: 400,
};

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
      dispatch(actions.PLAYER.updateTime({ tick: 0 }));
    }
  }, [lastPlayerStatus]);

  const handlePlayScore = useCallback(() => {
    if (data && !active) {
      actions.PLAYER.play(dispatch)(data);
    }
  }, [data, active]);

  return (
    <section class={`mt-8${!data ? ' hidden' : ''}`}>
      <CurrentTrack activeRepo={activeRepo} status={player.status} active={active} />
      <TimingInfo currentTime={player.currentTime} />
      <div class="mt-2 flex items-center" onClick={handlePlayScore} style={{minHeight: vizSettings.height}}>
        <button class={`fill-button h-16 w-16 ${unchecked} ${active}`}>
          <svg viewBox="0 0 26 26">
            <polygon class="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
          </svg>
        </button>
        <Fade show={active}>
          <Canvas
            className="ml-8"
            width={vizSettings.width}
            height={vizSettings.height}
            viz={BarViz}
          />
        </Fade>
      </div>
    </section>
  )
};

export default PlayControls;
