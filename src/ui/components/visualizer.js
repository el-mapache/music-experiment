import { h, createRef } from 'preact';
import p5 from 'p5'
import { useEffect } from 'preact/hooks';

const p5Events = [
  'movedX',
  'movedY',
  'mouseX',
  'mouseY',
  'mouseButton',
  'mouseIsPressed',
  'mouseMoved',
  'mouseDragged',
  'mousePressed',
  'mouseReleased',
  'mouseClicked',
  'doubleClicked',
  'mouseWheel',
  'keyIsPressed',
  'key',
  'keyCode',
  'keyPressed',
  'keyReleased',
  'keyTyped',
  'keyIsDown',
  'draw',
];

const Visualizer = (props) => {
  const canvasRef = createRef();

  useEffect(() => {
    const myp5 = new p5((p) => {
      p5Events.forEach((override) => {
        if (override in props) {
          p[override] = (...args) => {
            props[override](p, ...args)
          }
        }
      });
    });

    myp5.createCanvas(400, 250).parent(canvasRef.current);
    myp5.frameRate(60);
    myp5.displayDensity(1)

    return () => {
      myp5.remove();
    }
  }, []);

  return <section ref={canvasRef} style={{overflow: 'hidden'}}></section>;
};

export default Visualizer;
