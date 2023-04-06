import React from 'react';
import icon from '../resources/exampleIcon.png';
import PropTypes from 'prop-types';
import './css/gridSquare.css';


export default class TokenSquare extends React.Component {
  render() {
    const openTokenMenu = () => {
      console.log('Here stupid', this.props.position);
      this.props.openTokenMenu();
    };

    const convertToMargin = (positionNum) => {
      positionNum = positionNum * 25;
      return positionNum;
    };

    return (
      <img
        style={{
          position: 'absolute',
          marginLeft: `${convertToMargin(this.props.position[0]) - 150}px`,
          marginTop: `${convertToMargin(this.props.position[1]) - 25}px`,
        }}
        className='grid-square'
        src={icon}
        onClick={openTokenMenu}
      />
    );
  }
}

TokenSquare.propTypes = {
  openTokenMenu: PropTypes.func,
  position: PropTypes.array,
};
