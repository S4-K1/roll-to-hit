import React, { useState } from 'react';
import MacroEditMenu from './macroEditMenu.js';
import PropTypes from 'prop-types';
import Macro from './macros/macro.json';
import './css/macroButton.css';

function MacroButton(props) {
  const [macroTitle, setMacroTitle] = useState(Macro.title);
  const [macroCommand, setMacroCommand] = useState(Macro.command);
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

  function editTitle(newTitle) {
    setMacroTitle(newTitle);
  }

  function editCommand(newCommand) {
    setMacroCommand(newCommand);
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
              macroTitle={macroTitle}
              macroCommand={macroCommand}
              editCommand={editCommand}
              editTitle={editTitle}
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
