import { useEffect, useState } from 'preact/hooks';
import { commitSequencerSubscriber } from 'services/playback';


const useScheduler = (name, initialState) => {
  const [ state, setState ] = useState(initialState);

  useEffect(() => {
    commitSequencerSubscriber(name, (nextState) => {
      setState(state => ({
        ...state,
        ...nextState
      }));
    }, [])
  });
 
  return state;
}

export default useScheduler;
