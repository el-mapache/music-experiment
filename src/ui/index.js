import {h, render } from 'preact';
import StateProvider from 'ui/store';
import RadioGroup from 'ui/radio-group';
import RepoFormDispatcher from 'ui/repo-form-dispatcher';


const App = () => (
  <StateProvider>
    <RadioGroup
      label="Choose an option below."
      helpText="You can always change your mind."
      name="toggle-repo-form-type"
    />
    <RepoFormDispatcher />
  </StateProvider>
);

render(<App />, document.getElementById('app'));
