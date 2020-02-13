import { h, createRef } from 'preact';
import p5 from 'p5'
import { useEffect, useState } from 'preact/hooks';

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
  'handleRedraw',
  
];

const Visualizer = (props) => {
  const canvasRef = createRef();
  const [ myp5, setP5 ] = useState(null)
  const [ isDrawing, setIsDrawing ] = useState(false);

  useEffect(() => {
    const p5Inst = new p5((p, args) => {
      p5Events.forEach((override) => {
        if (override in props) {
          p[override] = (...args) => {
            props[override](p, ...args);
          }
        }
      });

      return p;
    });

    p5Inst.createCanvas(400, 250).parent(canvasRef.current);

    if (props.setup) {
      props.setup(p5Inst);
    }

    setP5(p5Inst);

    return () => {
      p5Inst.remove();
    }
  }, []);

  if (!props.isActive && myp5 && myp5._loop) {
    myp5.noLoop();
  }

  if (props.chord && props.isActive) {
    if (!myp5._loop) {
      myp5.loop()
    }

    myp5.draw = () => {
      props.draw(myp5, props.chord);
    }
  }

  return <section ref={canvasRef} style={{overflow: 'hidden'}}></section>;
};

export default Visualizer;
