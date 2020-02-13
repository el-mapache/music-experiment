import { h } from 'preact';
import useScheduler from 'ui/use-scheduler';

const getSeconds = time => (time % 60) | 0;
const getMinutes = time => (time / 60) | 0;
const formatTime = time => time < 10 ? `0${time}` : time

// TODO: There is a bug with calculating total time,
// probably bc of note durations being potentially longer
// due to humanization
const TimingInfo = ({ totalTime = 0, globalCurrentTime }) => {
  const { tick } = useScheduler('timer', { tick: 0 });
  //const currentTime = tick)

  const minutes = getMinutes(totalTime);
  const seconds = getSeconds(totalTime);
  const currentMinutes = getMinutes(tick);
  const currentSeconds = getSeconds(tick);
  const formatMinutes = formatTime(minutes);
  const formatSeconds = formatTime(seconds);
  const formatCurrentMinutes = formatTime(currentMinutes);
  const formatCurrentSeconds = formatTime(currentSeconds);

  return (
    <p>
      <span class="px-1 w-12 text-left inline-block">
        {formatCurrentMinutes}:{formatCurrentSeconds}
      </span>
      <span class="px-1">/</span>
      <span class="px-1">
        {formatMinutes}:{formatSeconds}
      </span>
    </p>
  )
}

export default TimingInfo;
