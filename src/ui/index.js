import {h, render } from 'preact';
import StateProvider from 'ui/store';
import RadioGroup from 'ui/components/radio-group';
import RepoFormSwitcher from 'ui/components/repo-form-switcher';
import Playback from 'ui/components/playback';
import { useEffect, useState, useContext } from 'preact/hooks';
import { store } from 'ui/store';
import { commitSequencerSubscriber } from 'services/playback';
import { actions } from 'ui/actions';
import FormUIProvider from 'ui/contexts/form-ui';

const App = () => {
  const { dispatch } = useContext(store);

  useEffect(() => {
    commitSequencerSubscriber('timer', (nextState) => {
      dispatch(actions.PLAYER.updateTime(nextState))
    });
  },[])

  return (
    <div class="w-3/4">
      <FormUIProvider>
        <RadioGroup
          label="Choose one"
          name="toggle-repo-form-type"
        />
        <RepoFormSwitcher />
      </FormUIProvider>
      <Playback />
    </div>
  );
};

render(
  <StateProvider>
    <App />
  </StateProvider>, document.getElementById('app'));
