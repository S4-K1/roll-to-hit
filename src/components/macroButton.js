import React, { useState } from 'react';
import MacroEditMenu from './macroEditMenu.js';
import PropTypes from 'prop-types';
import './css/macroButton.css';

function MacroButton(props) {
  const Macro = JSON.parse(localStorage.getItem('Macro'));

  const [macroTitle, setMacroTitle] = useState(Macro ? Macro.title : 'Unnamed Macro');
  const [macroCommand, setMacroCommand] = useState(Macro ? Macro.command : '');
  const [showMacroEditMenu, setShowMacroEditMenu] = useState(false);

  function executeMacro() {
    props.macroCommand(Macro);
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

  function saveMacro() {
    let newMacro = {
      title: macroTitle,
      command: macroCommand,
    };
    newMacro = JSON.stringify(newMacro);

    localStorage.setItem('Macro', newMacro);
    closeMacroEditMenu();
  }

  return (
    <div>
      {props.macroMenu && (
        <div className='macroMenu'>
          <button className='menuButton' onClick={openMacroEditMenu}>
            Edit Macro
          </button>
        </div>
      )}
      <button className='macroButton' onContextMenu={handleRightClick} onClick={executeMacro}>
        {macroTitle}
      </button>
      {showMacroEditMenu && (
        <MacroEditMenu
          closeMacroEditMenu={closeMacroEditMenu}
          macroTitle={macroTitle}
          macroCommand={macroCommand}
          editCommand={editCommand}
          editTitle={editTitle}
          saveMacro={saveMacro}
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
