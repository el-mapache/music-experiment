import {h, render } from 'preact';
import StateProvider from 'ui/store';
import RadioGroup from 'ui/components/radio-group';
import RepoFormDispatcher from 'ui/components/repo-form-dispatcher';
import PlayControls from 'ui/components/player-controls';

const App = () => (
  <StateProvider>
    <RadioGroup
      label="Choose one"
      helpText="You can always change your mind."
      name="toggle-repo-form-type"
    />
    <RepoFormDispatcher />
    <PlayControls />
  </StateProvider>
);

render(<App />, document.getElementById('app'));
