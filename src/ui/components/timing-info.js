import { h } from 'preact';

const getSeconds = time => (time % 60) | 0;
const getMinutes = time => (time / 60) | 0;
const formatTime = time => time < 10 ? `0${time}` : time

const TimingInfo = ({ currentTime }) => {;
  const currentMinutes = getMinutes(currentTime);
  const currentSeconds = getSeconds(currentTime);
  const formatCurrentMinutes = formatTime(currentMinutes);
  const formatCurrentSeconds = formatTime(currentSeconds);

  return (
    <p>
      <span class="px-1 w-12 text-left inline-block">
        {formatCurrentMinutes}:{formatCurrentSeconds}
      </span>
    </p>
  )
}

export default TimingInfo;
