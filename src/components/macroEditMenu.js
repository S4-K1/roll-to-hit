import React from 'react';
import './css/macroEditMenu.css';

function MacroEditMenu() {
  function onEnterPress(event) {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      // TODO read the content of a text file for token command
    }
  }
  return (
    <div className='macroEditContainer'>
        <div className='macroEditMenu'>
            <textarea id='macroBox' placeholder='Macro' onKeyDown={onEnterPress} />
        </div>
    </div>
  );
}

export default MacroEditMenu;
