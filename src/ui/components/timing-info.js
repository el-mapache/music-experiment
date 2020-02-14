import { h } from 'preact';

const getSeconds = time => (time % 60) | 0;
const getMinutes = time => (time / 60) | 0;
const formatTime = time => time < 10 ? `0${time}` : time

const TimingInfo = ({ trackTotalTime = 0, currentTime }) => {
  const minutes = getMinutes(trackTotalTime);
  const seconds = getSeconds(trackTotalTime);
  const currentMinutes = getMinutes(currentTime);
  const currentSeconds = getSeconds(currentTime);
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
