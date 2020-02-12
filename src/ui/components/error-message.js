import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { store } from 'ui/store';

const ErrorMessage = ({ forState }) => {
  const { state } = useContext(store);
  const { error } = state[forState];

  return (
    <p class="text-red-600 text-md italic mt-2 h-4">
      {error}
    </p>
  );
}

export default ErrorMessage;
