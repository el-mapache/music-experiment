import { h } from 'preact';

const setChecked = (condition, predicate) => {
  if (!condition) {
    return '';
  }

  return condition === predicate ? ' checked' : ' unchecked';
}

const withCheckable = ConcreteRadio => (props) => {
  return (
    <ConcreteRadio {...props} setChecked={setChecked} />
  )
};

export default withCheckable;
