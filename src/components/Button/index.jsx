import P from 'prop-types';

export const Button = ({ text, onButtonClick, disabled = false }) => {
  return (
    <button onClick={onButtonClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  onButtonClick: P.func.isRequired,
  disabled: P.bool,
};
