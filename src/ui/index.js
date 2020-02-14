import {h, render } from 'preact';
import StateProvider from 'ui/store';
import RadioGroup from 'ui/components/radio-group';
import RepoFormDispatcher from 'ui/components/repo-form-dispatcher';
import Playback from 'ui/components/playback';
import { useEffect, useState, useContext } from 'preact/hooks';
import { store } from 'ui/store';
import { commitSequencerSubscriber } from 'services/playback';
import { actions } from 'ui/actions';

const App = () => {
  const { dispatch } = useContext(store);

  useEffect(() => {
    commitSequencerSubscriber('timer', (nextState) => {
      dispatch(actions.PLAYER.updateTime(nextState))
    });
  },[])

  return (
    <div>
      <RadioGroup
        label="Choose one"
        helpText="You can always change your mind."
        name="toggle-repo-form-type"
      />
      <RepoFormDispatcher />
      <Playback />
    </div>
  );
};

render(
  <StateProvider>
    <App />
  </StateProvider>, document.getElementById('app'));
