import { useEffect, useState } from 'preact/hooks';
import { commitSequencerSubscriber } from 'services/playback';

const initialState = {
  tick: 0
};

const subscriptionName = 'useSchedule'

const useScheduler = () => {
  const [ state, setState ] = useState(initialState);

  useEffect(() => {
    commitSequencerSubscriber(subscriptionName, (currentTime) => {
      setState({ tick: currentTime });
    }, [])
  });
 
  return state;
}

export { useScheduler };
