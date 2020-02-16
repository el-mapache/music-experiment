import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks'
import useAnimation from '../hooks/use-animation';

const Canvas = ({ width, height, viz: Viz, ...rest}) => {
  const canvasRef = useRef();
  const [ originalSize, setOriginalSize ] = useState({
    height: null, width: null
  });
  const [ context, setContext ] = useState(null);
  const [ pixelRatio, setPixelRatio ] = useState(null);

  useEffect(() => {
    const getPixelRatio = context => {
      const backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        1;
      
      return (window.devicePixelRatio || 1) / backingStore;
    };

    let canvas = canvasRef.current;

    let context = canvas.getContext('2d');
    let ratio = getPixelRatio(context);
    setPixelRatio(ratio);
    // We need to store values to the original unscaled size of the 
    // canvas. Since this function runs again every time the component
    // mounts we dont want to continually add the scaled values to it
    let width = canvas.width;
    let height = canvas.height;

    setContext(context)
    setOriginalSize({ height, width })

    canvas.width = (canvas.width * ratio);
    canvas.height = (canvas.height * ratio);
    context.scale(ratio, ratio);

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  }, []);

  let showViz;

  if (context) {
    showViz = <Viz context={context} dimensions={originalSize} ratio={pixelRatio} />;
  }

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      {...rest}
    >
     {showViz}
    </canvas>
  )
};

export default Canvas;
