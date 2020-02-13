import {h, render } from 'preact';
import StateProvider from 'ui/store';
import RadioGroup from 'ui/components/radio-group';
import RepoFormDispatcher from 'ui/components/repo-form-dispatcher';
import Playback from 'ui/components/playback';
import Visualizer from 'ui/components/visualizer';

let yoff = 0.0;

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


const WaveViz = () => {
  let yoff = 0.0;
  let isActive = true;

  const mousePressed = (p,event) => {
    if (event.target.tagName !== 'CANVAS') {
      return;
    }

    if (isActive) {
      p.noLoop();
      isActive = false;
    } else {
      isActive = true;
      p.loop();
    }
  }

  const setup = (p5) => {
    p5.noiseDetail(12, 0.25);
  };

  const draw = (p5, settings) => {
    p5.background(120, 130, 130, 0.8);
    p5.fill(p5.color(50, 30, 200,0.5));
    p5.beginShape();
   // p5.strokeWeight(4);

    let updateTime = 0;
    let debounceTime = 2000;
    let now = p5.millis();

    // if (now > updateTime + debounceTime) {
      //p5.stroke(p5.color(p5.random(200,255), p5.random(100, 255), p5.random(80, 160)));
    //   updateTime = now;
    // }
    
    var xoff = 0;       // Option #1: 2D Noise
    //var xoff = yoff; // Option #2: 1D Noise
    
    // Iterate over horizontal pixels
    for (var x = 0; x <= p5.width; x += 5) {
      // Calculate a y value according to noise, map to 
      
      // Option #1: 2D Noise
      var y = p5.map(p5.noise(xoff, yoff), 0, 1, 100, 300);
      var sine = p5.map(p5.sin(xoff), -1, 1, -50, 50);
  
      // Option #2: 1D Noise
       //var y = map(noise(xoff), 0, 1, 200,300);
      // Set the vertex
      p5.vertex(x, y); 
      // Increment x dimension for noise
      // increasing this makes the spikes spikier
      xoff += 0.02;
    }
    // increment y dimension for noise
    yoff += 0.0085

    p5.vertex(p5.width, p5.height); 
    p5.vertex(0, p5.height);
    p5.endShape(p5.CLOSE);
  };

  return <Visualizer  draw={draw} mousePressed={mousePressed} />
}

const App = () => (
  <StateProvider>
    <RadioGroup
      label="Choose one"
      helpText="You can always change your mind."
      name="toggle-repo-form-type"
    />
    <RepoFormDispatcher />
    <Playback />
    <WaveViz />
  </StateProvider>
);

render(<App />, document.getElementById('app'));
