import React from 'react';
import icon from '../resources/exampleIcon.png';
import PropTypes from 'prop-types';
import './css/gridSquare.css';


class TokenSquare extends React.Component {
  render() {
    const openTokenMenu = () => {
      this.props.openTokenMenu();
    };

    return (
      <img
        className='grid-square'
        src={icon}
        onClick={openTokenMenu}
      />
    );
  }
}

TokenSquare.propTypes = {
  keyProp: PropTypes.string,
  openTokenMenu: PropTypes.func,
};

export default TokenSquare;
