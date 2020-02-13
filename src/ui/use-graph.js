import { useEffect, useState } from 'preact/hooks';

const useGraph = (graph) => {
  const [ state, setState ] = useState(initialState);

  useEffect(() => {
    setState(graph);
  }, []);

  return state;
};

export default useGraph;
