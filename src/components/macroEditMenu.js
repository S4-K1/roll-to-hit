import React from 'react';
import './css/macroEditMenu.css';
import PropTypes from 'prop-types';

function MacroEditMenu(props) {
  function close() {
    props.closeMacroEditMenu();
  }

  function setMacroCommand(event) {
    props.editCommand(event.target.value);
  }

  function setMacroTitle(event) {
    props.editTitle(event.target.value);
  }

  function save() {
    props.saveMacro();
  }

  return (
    <div className='macroEditContainer'>
      <div className='macroEditMenu'>
        <h2>Edit Macro</h2>
        <div className='editBox'>
          <b>Name</b>
          <input
            id='nameBox'
            className='inputBox'
            placeholder='No name written'
            value={props.macroTitle}
            onChange={setMacroTitle}
          />
        </div>
        <div className='editBox'>
          <b>Macro</b>
          <textarea
            id='macroBox'
            className='inputBox'
            placeholder='No macro written'
            value={props.macroCommand}
            onChange={setMacroCommand}
            rows={4}
            cols={40}
          />
        </div>
        <div className='buttonContainer'>
          <button className='button' onClick={close}>Cancel</button>
          <button className='button' onClick={save}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

MacroEditMenu.propTypes = {
  closeMacroEditMenu: PropTypes.func,
  macroTitle: PropTypes.string,
  macroCommand: PropTypes.string,
  editTitle: PropTypes.func,
  editCommand: PropTypes.func,
  saveMacro: PropTypes.func,
};

export default MacroEditMenu;
