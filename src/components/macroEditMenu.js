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
            <h2>Edit Macro</h2>
            <div className='editBox'>
                <b>Name</b>
                <input id='nameBox' className='inputBox' placeholder='No name written' onKeyDown={onEnterPress} />
            </div>
            <div className='editBox'>
                <b>Macro</b>
                <textarea id='macroBox' className='inputBox' placeholder='No macro written' rows={4} cols={40} onKeyDown={onEnterPress} />
            </div>
            <div className='buttonContainer'>
                <button className='button'>Cancel</button>
                <button className='button'>Save Changes</button>
            </div>
        </div>
    </div>
  );
}

export default MacroEditMenu;
