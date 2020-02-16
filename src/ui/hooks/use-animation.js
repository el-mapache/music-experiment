import { useEffect, useRef } from 'preact/hooks';

const useAnimation = (callback, cleanup) => {
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const animate = (time) => {
    if (typeof previousTimeRef.current !== 'undefined') {
      callback(time);
    }

    previousTimeRef.current = time;
    requestRef.current = window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = window.requestAnimationFrame(animate);

    return () => {
      cleanup();
      cancelAnimationFrame(requestRef.current);
    };
  }, []);
};

export default useAnimation;
