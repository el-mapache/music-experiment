import { h, createRef } from 'preact';
import {useEffect,} from 'preact/hooks';
import Visualizer from 'ui/components/visualizer';
import useScheduler from 'ui/use-scheduler';
import p5 from 'p5'

let mp5;

const toneColors = {
  'C': '#B794F4',
  'D': '#667EEA',
  'E': '#F687B3',
  'F': '#4C51BF',
  'G': '#FAF089',
  'A': '#F6AD55',
  'B': '#000000',
  0:  '#A0AEC0'
}

const colors = ['#5A67D8', '#F687B3', '#FAF089'];

const WavesViz = ({ active }) => {
  const canvasRef = createRef();
  const { chord } = useScheduler('sound', { chord: null });
  let yoff = 0.0;
  let constantyoff = 0.0;
  let isActive = false;

  const mousePressed = (p, event) => {
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

  const handleRedraw = (p5) => {
    if (!isActive) {
      isActive = true;
      p5.loop();
    }
  };
var off = 0.0
  const draw = (p, chord) => {
    off = 0.0;
    if (chord && chord.noteName) {
      var fade = 100;
      while (fade) {
        p.stroke(`rgba(100,100,100, ${fade / 100}`);
        p.ellipse(off, 100, 100 + off);
        fade--;
      }

      if (!fade) {
        p.stroke(`rgba(100,100,100,0)`);
      }
      off += 10
  }
  //   p.fill(50, 30, 200, 0.5);
  //   p.background(247, 250, 252, 0.1);
  //   p.beginShape();


  //     var xoff = 0;
  //     p.stroke('rgba(120,130,130, .25)')
  //     for (var x = 0; x <= p.width; x += 5) {        
  //       var y = p.map(p.noise(xoff, constantyoff), 0, 1, 100,300);
        
  //       p.vertex(x, y); 

  //       xoff += 0.02;
  //     }

  //     constantyoff += 0.0085;
  //     p.vertex(p.width, p.height);
  //     p.vertex(0, p.height);
  //     p.endShape(p.CLOSE);

  //  if (chord && chord.noteName) {
  //     p.stroke(p.color(colors[p.random(0, 3) | 0]));
      
  //     const yspike = chord.frequency
  //     var xoff = 0

  //     for (var x = 0; x <= p.width; x += 10) {
  //       // Calculate a y value according to noise, map to 
        
  //       // Option #1: 2D Noise
  //       var y = p.map(p.noise(xoff, yoff), 0, 1, 100, 300);
  //       // var sine = p.map(p.sin(xoff), -1, 1, 0, 300);
  //       var sine = p.map(p.sin(yspike) * (chord.peak * 1000), -1, 1, 100, p.height);

  //       p.vertex(x, sine + chord.peak + y); 
  //       // Increment x dimension for noise
  //       // increasing this makes the spikes spikier
  //       xoff += .01;
  //     }
  //     // increment y dimension for noise
  //     yoff += 0.0085

  //     p.vertex(p.width, p.height); 
  //     p.vertex(0, p.height);
  //     p.endShape(p.CLOSE);
  //   }
  };

  const setup = (p) => {
    p.noLoop();
    p.frameRate(60);
    p.strokeWeight(1);
  }

  return <Visualizer isActive={active} chord={chord} doDraw={!!chord} handleRedraw={handleRedraw} setup={setup} draw={draw} mousePressed={mousePressed} />
}

export default WavesViz;
