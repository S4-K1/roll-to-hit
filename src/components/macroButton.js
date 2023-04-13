import React from 'react';
import PropTypes from 'prop-types';
import './css/macroButton.css';

function MacroButton(props) {
  function executeMacro() {
    props.macroCommand('asdf');
  }

  function handleRightClick(event) {
    event.preventDefault();
    props.openMacroMenu();
  }

  function openMacroEditMenu() {
    console.log('Open macro edit menu');
  }

  return (
    <div className='macroContainer'>
       <button className='macroButton' onContextMenu={handleRightClick} onClick={executeMacro}>
            Macro
        </button>
        {props.macroMenu && (
            <div className='macroMenu'>
                <button className='menuButton' onClick={openMacroEditMenu}>
                    Edit Macro
                </button>
            </div>
        )}
    </div>
  );
}

MacroButton.propTypes = {
  macroCommand: PropTypes.func,
  macroMenu: PropTypes.bool,
  openMacroMenu: PropTypes.func,
};

export default MacroButton;
