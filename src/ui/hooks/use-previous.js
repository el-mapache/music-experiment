import { useEffect, useRef } from 'preact/hooks';

// Allows for a componentDid/Should update type hook
// in which we compute somoe side effect based on
// changes in previous and current props
const usePrevious = (value) => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
