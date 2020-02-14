import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { store } from 'ui/store';

const ErrorMessage = ({ forState }) => {
  const { state } = useContext(store);
  const { error } = state[forState];

  return (
    <p class="text-md italic mt-1 h-4" style={{color: "#c14949"}}>
      {error}
    </p>
  );
}

export default ErrorMessage;
