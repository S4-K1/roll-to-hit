import React, { useState } from 'react';
import GridLayer from './layers/gridLayer/gridLayer';
import TokenSquare from './layers/tokenLayer/tokenSquare';
import PropTypes from 'prop-types';

function Board(props) {
  const [tokenSelected, setTokenSelected] = useState(false);

  function openTokenMenu(command) {
    props.openTokenMenu(command);
    setTokenSelected(true);
  }

  return (
    <div>
      <TokenSquare openTokenMenu={openTokenMenu} position={[3, 9]} selected={tokenSelected}/>
      <GridLayer x={10} y={10} />
    </div>
  );
}

Board.propTypes = {
  openTokenMenu: PropTypes.func,
};

export default Board;
