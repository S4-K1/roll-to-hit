import React from 'react';
import PropTypes from 'prop-types';

function MacroButton(props) {
  function executeMacro() {
    props.macroCommand('asdf');
  }
  return (
    <button onClick={executeMacro}>Macro</button>
  );
}

MacroButton.propTypes = {
  macroCommand: PropTypes.func,
};

export default MacroButton;
