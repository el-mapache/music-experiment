import { h } from 'preact';
import { useState, useContext } from 'preact/hooks';
import { store } from 'ui/store';
import playback from 'services/playback';


const PlayControls = () => {
  const [ isActive, setActive ] = useState(false);
  const { state } = useContext(store);
  const { commitData: { data } } = state;
  const unchecked = !data ? 'unchecked' : '';
  const active = isActive ? 'active' : '';

  const handlePlayScore = () => {
    if (data) {
      setActive(true);
      playback.playScore(data);
    }
  };

  return (
    <div class="mt-2" onClick={handlePlayScore}>
      <button class={`fill-button h-16 w-16 ${unchecked} ${active}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
          <polygon class="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
        </svg>
      </button>
    </div>
  )
};

export default PlayControls;
