import { useEffect, useState, useContext } from 'preact/hooks';
import { store } from 'ui/store';
import { commitSequencerSubscriber } from 'services/playback';
import { actions } from 'ui/actions';


const useScheduler = (name, initialState) => {
  const [ state, setState ] = useState(initialState);
  const { dispatch } = useContext(store);

  useEffect(() => {
    commitSequencerSubscriber(name, (nextState) => {
      dispatch(actions.PLAYER.updateTime(nextState))
    });
  });
 
  return state;
}

export default useScheduler;
