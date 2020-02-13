import {h, render } from 'preact';
import StateProvider from 'ui/store';
import RadioGroup from 'ui/components/radio-group';
import RepoFormDispatcher from 'ui/components/repo-form-dispatcher';
import Playback from 'ui/components/playback';
import WavesViz from 'ui/viz/waves';


const draw = (p5, settings) => {
  p5.background(120, 130, 130, 1);

  p5.fill(p5.color(50, 30, 200,1));
  // We are going to draw a polygon out of the wave points
  p5.beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  //var xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= settings.width; x += 5) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
    var y = p5.map(p5.noise(xoff, settings.yoff), 0, 1, 200,200);

    // Option #2: 1D Noise
     //var y = map(noise(xoff), 0, 1, 200,300);
    
    // Set the vertex
    p5.vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.02;
  }
  // increment y dimension for noise
  settings.yoff += 0.0085;
  p5.vertex(settings.width, settings.height);
  p5.vertex(0, settings.height);
  p5.endShape(p5.CLOSE);
};

const App = () => (
  <StateProvider>
    <RadioGroup
      label="Choose one"
      helpText="You can always change your mind."
      name="toggle-repo-form-type"
    />
    <RepoFormDispatcher />
    <Playback />
    <WavesViz />
  </StateProvider>
);

render(<App />, document.getElementById('app'));
