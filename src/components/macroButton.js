import React, { useState } from 'react';
import MacroEditMenu from './macroEditMenu.js';
import PropTypes from 'prop-types';
import './css/macroButton.css';

function MacroButton(props) {
  const [showMacroEditMenu, setShowMacroEditMenu] = useState(false);

  function executeMacro() {
    props.macroCommand('asdf');
  }

  function handleRightClick(event) {
    event.preventDefault();
    props.openMacroMenu();
  }

  function openMacroEditMenu() {
    setShowMacroEditMenu(true);
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
        {showMacroEditMenu && (
            <MacroEditMenu />
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
