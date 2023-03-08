import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icon from '../resources/exampleIcon.png';
import './css/gridSquare.css';


class GridSquare extends React.Component {
  render() {
    if (this.props.displayIcon) {
      const StyledDiv = styled.div`
        background-image: url(${icon});
        background-size: cover;
      `;
      return (
        <StyledDiv className='grid-square' />
      );
    } else {
      return (
        <div className='grid-square'/>
      );
    }
  }
}

GridSquare.propTypes = {
  displayIcon: PropTypes.bool,
  keyProp: PropTypes.string,
};

export default GridSquare;
