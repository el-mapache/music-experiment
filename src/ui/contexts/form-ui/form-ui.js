import { createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';

const initialState = {
  activeForm = ''
};

const FormUIContext = createContext();
const useFormUIState = () => {
  const context =  useContext(FormUIContext);

  if (typeof context === 'undefined') {
    throw new Error('Must be called from within a FormUIContext');
  }

  return context.state;
};

const useFormUIUpdate = () => {
  const context =  useContext(FormUIContext);

  if (typeof context === 'undefined') {
    throw new Error('Must be called from within a FormUIContext');
  }

  return context.update;
};

const FormUIProvider = ({ children }) => {
  const [ state, update ] = useState(initialState);

  return (
    <FormUIContext.Provider value={{ state, update }}>
      {children}
    </FormUIContext.Provider>
  );
};

export { useFormUIState, useFormUIUpdate };
export default FormUIProvider;
