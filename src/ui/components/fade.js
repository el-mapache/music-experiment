import { h } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import useEventListener from 'ui/hooks/use-event-listener';

const Fade = ({ show, children }) => {
  const elRef = useRef();
  const [isActive, setActive] = useState(false);

  const hide = useCallback(() => {
    if (isActive && !show) {
      setActive(false);
    }
  }, [isActive, show, setActive]);

  useEventListener(elRef.current, 'animationend', hide);

  useEffect(() => {
    if (show) {
      setActive(true);
    }
  }, [show, setActive]);

  return isActive && (
    <div
      ref={elRef}
      style={{ animation: `${show ? "fade-in" : "fade-out"} .75s` }}
    >
      {children}
    </div>
  )
};

export default Fade;
