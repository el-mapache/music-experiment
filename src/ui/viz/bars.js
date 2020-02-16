import { h } from 'preact';
import { store } from 'ui/store';
import { useContext, useCallback } from 'preact/hooks';
import useAnimation from 'ui/hooks/use-animation';


const FILL = '#CBD5E0';
const render = (graph, {height, width}, context, ratio) => {
  if (!graph) {
    return;
  }

  const h = height
  const w = width;

  let x = 0;
  let bufferLength = graph.analyser.frequencyBinCount;
  let dataArray = new Uint8Array(bufferLength);
  let barWidth = (w / bufferLength) * 2.5;
  let barHeight;

  graph.analyser.getByteFrequencyData(dataArray);
  
  context.clearRect(0, 0, w, h);
  context.fillStyle = FILL;
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
    context.fillStyle = `rgba(${r},${g},${b}, 1)`;

    // Since this is amplitude displayed linearly, the first elem is always the attack
    // of the sound (I think), therefore the loudest, so clamp it manually
    if (!i) {
      finalHeight = barHeight - 150;
    }

    context.fillRect(x, h - finalHeight, barWidth, finalHeight);

    x += barWidth + 1;
  }
};

const BarViz = ({ dimensions, context, ratio }) => {
  const { state: { player: { graph }} } = useContext(store);
  const draw = useCallback(() => {
    return render(graph, {height: dimensions.height, width: dimensions.width}, context, ratio);
  }, [graph, dimensions.height, dimensions.width, context, ratio]);
  
  useAnimation(draw, () => {
    context.clearRect(0, 0, dimensions.width, dimensions.height);
  });

  return null
};

export default BarViz;
