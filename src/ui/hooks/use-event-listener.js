import { useEffect, useRef } from 'preact/hooks';

const useEventListener = (element, event, handler) => {
  const cachedHandler = useRef();

  useEffect(() => {
    cachedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!element) {
      return;
    }

    // Wrap the event handler in a custom handler, to make
    // sure we always call the freshest version.
    const wrappedHandler = (event) => cachedHandler.current(event);

    element.addEventListener(event, wrappedHandler);

    return () => {
      element && element.removeEventListener(event, wrappedHandler);
    };
  }, [event, element]);
};

export default useEventListener;
