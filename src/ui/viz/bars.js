import { h, createRef } from 'preact';
import { store } from 'ui/store';
import { useContext, useEffect, useState, useCallback, useRef, useMemo } from 'preact/hooks';

const getPixelRatio = context => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
  
  return (window.devicePixelRatio || 1) / backingStore;
};

// not optimal but it works!

const BarViz = (props) => {
  const { state: { player: { graph, status }} } = useContext(store);
  const canvasRef = useRef();
  const playing = status === 'playing';
  const [isActive, setActive] = useState(false);

  const hide = useCallback(() => {
    if (isActive && !playing) {
      setActive(false);
    }
  }, [isActive, playing, setActive]);
  
  // By storing this as a ref, we can always ensure a
  // pointer to the freshest version of this function
  const safeHide = useRef();
  // // Every time the component re-renders,
  // // store a pointer to the current 'hide' function
  // // in our ref.
  useEffect(() => {
    safeHide.current = hide;
  }, [hide])


  useEffect(() => {
    if (playing) {
      setActive(true);
    }
  }, [playing, setActive]);

  /**
   * For this effect, we only have to pass in a reference to the canvas.
   * Since we cached the hide function as safeHide, it doesn't need to be
   * supplied as a dependency, as it is guaranteed to never be a stale
   * reference.
   * 
   * We want to pass the `current` prop explicitly, as the canvasRef
   * object will usually not be equal to itself
   */
  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    // Wrap the event handler in a custom handler, to make
    // sure we always call the freshest version.
    const handler = (event) => safeHide.current(event);
    canvasRef.current.addEventListener('animationend', handler);

    return () => {
      canvasRef.current && canvasRef.current.removeEventListener('animationend', handler);
    };
  }, [canvasRef.current]);

  useEffect(() => {
    if (!graph) {
      return;
    }

    let animationRequest;
    let canvas = canvasRef.current;
    let context = canvas.getContext('2d');
    let ratio = getPixelRatio(context);
    // We need to store values to the original unscaled size of the 
    // canvas. Since this function runs again every time the component
    // mounts we dont want to continually add the scaled values to it
    let width = canvas.width;
    let height = canvas.height;

    canvas.width = (canvas.width * ratio);
    canvas.height = (canvas.height * ratio);
    context.scale(ratio, ratio);

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    let x = 0;
    let dataArray;
    let barWidth;
    let barHeight;
    let bufferLength;

    const render = () => {
      const h = canvas.height / ratio;
      const w = canvas.width / ratio;
      context.clearRect(0, 0, w, h);
      x = 0;

      graph.analyser.getByteFrequencyData(dataArray);
      context.fillStyle = "#CBD5E0";
      context.fillRect(0, 0, w, h);

      /**
       * Start at 1 because according to the nyquist theorum, N * samplerate/frequency,
       * where N is 0, the frequency here will also be zero. This means that the
       * bar will always be at max height due to the calculations below used
       * to draw. Also, nobody will miss 1 frequency : D
       */
      for (let i = 1; i < bufferLength; i++) {
        const frequencyData = dataArray[i];
        barHeight = frequencyData;
        
        // The louder the sound, the more indigo it turns, the quieter,
        // the yellower
        let r = Math.max(244 - frequencyData, 76);
        let g = Math.max(226 - frequencyData, 81);
        let b = Math.max(9 - frequencyData, 191);
      
        let finalHeight = barHeight ? barHeight * (i / 20) / ratio : 0; 
        context.fillStyle = `rgba(${r},${g},${b}, .8)`;

        // Since this is amplitude displayed linearly, the first elem is always the attack
        // of the sound (I think), therefore the loudest, so clamp it manually
        if (!i) {
          finalHeight = barHeight - 150;
        }

        context.fillRect(x, h - finalHeight, barWidth, finalHeight);

        x += barWidth + 1;
      }

      animationRequest = requestAnimationFrame(render);
    };

    
    bufferLength = graph.analyser.frequencyBinCount;
    barWidth = ((canvas.width / ratio) / bufferLength) * 2.5;
    dataArray = new Uint8Array(bufferLength);
    render();

    return () => {
      // Restore the canvas to its defaults
      canvas.width = width;
      canvas.height = height;
      context.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationRequest);
    };
  }, [ canvasRef.current]);

  return isActive && (
    <canvas
      class={`viz ${props.className} overflow-hidden`}
      style={{ animation: `${playing ? "fade-in" : "fade-out"} .75s` }}
      ref={canvasRef}
      height={props.height}
      width={props.width}
    >
    </canvas>
  );
};

export default BarViz;
