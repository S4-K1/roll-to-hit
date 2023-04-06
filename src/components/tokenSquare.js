import React, { useState } from 'react';
import icon from '../resources/exampleIcon.png';
import PropTypes from 'prop-types';
import './css/gridSquare.css';


function TokenSquare(props) {
  const convertToMargin = (positionNum) => {
    positionNum = positionNum * 25;
    return positionNum;
  };

  const [xPosition, setXPosition] = useState(convertToMargin(props.position[0]));
  const [yPosition, setYPosition] = useState(convertToMargin(props.position[1]));

  const openTokenMenu = () => {
    props.openTokenMenu();
  };


  // eslint-disable-next-line no-unused-vars
  const handleArrows = (event) => {
    console.log('hi', xPosition, yPosition);
    switch (true) {
      case (event.keyCode === 37) :
        moveTokenLeft();
        break;
      case (event.keyCode === 38) :
        moveTokenUp();
        break;
      case (event.keyCode === 39) :
        moveTokenRight();
        break;
      case (event.keyCode === 40) :
        moveTokenDown();
    }
  };

  const moveTokenLeft = () => {
    setXPosition(convertToMargin(xPosition - 1));
  };

  const moveTokenUp = () => {
    setYPosition(convertToMargin(yPosition - 1));
  };

  const moveTokenRight = () => {
    setXPosition(convertToMargin(xPosition + 1));
  };

  const moveTokenDown = () => {
    setYPosition(convertToMargin(yPosition + 1));
  };

  return (
    <div onKeyDown={e => {
      console.log(e);
    }}>
      <img
        style={{
          position: 'absolute',
          marginLeft: `${xPosition - 150}px`,
          marginTop: `${yPosition - 25}px`,
        }}
        className='grid-square'
        src={icon}
        onClick={openTokenMenu}

      />
    </div>
  );
}

TokenSquare.propTypes = {
  openTokenMenu: PropTypes.func,
  position: PropTypes.array,
};

export default TokenSquare;
