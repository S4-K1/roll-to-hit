import React from 'react';
import GridSquare from './gridSquare';
import PropTypes from 'prop-types';
import './grid.css';

function createGrid(x, y) {
  const grid = [];
  for (let row = 0; row < x; row++) {
    grid.push([]);
    for (let column = 0; column < y; column++) {
      const key = `${row}${column}`;
      grid[row].push(
        <GridSquare key={key}/>,
      );
    }
  }
  return grid;
}

function gridLayer(props) {
  const grid = createGrid(props.x, props.y);
  return (
    <div
      className='grid'
      style={{
        // grid-template-columns: repeat(10, 25px);
        gridTemplateColumns: `repeat(${props.x}, 25px)`,
      }}
    >
      {grid}
    </div>
  );
}

gridLayer.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

export default gridLayer;
