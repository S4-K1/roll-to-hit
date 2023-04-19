import React, { useState } from 'react';
import MacroEditMenu from './macroEditMenu.js';
import PropTypes from 'prop-types';
import Macro from './macros/macro.json';
import './css/macroButton.css';

function MacroButton(props) {
  const [macro] = useState(Macro);

  console.log('macro: ', Macro);

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

  function closeMacroEditMenu() {
    setShowMacroEditMenu(false);
  }

  function editMacro() {
    console.log(Macro);
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
            <MacroEditMenu
              closeMacroEditMenu={closeMacroEditMenu}
              editMacro={editMacro}
              macroTitle={macro.title}
              macroCommand={macro.command}
            />
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
