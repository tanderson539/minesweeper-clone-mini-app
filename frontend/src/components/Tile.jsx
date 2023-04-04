import React, {useContext, useEffect, useState} from 'react'
import { Buttonm, Col } from 'react-bootstrap'
import {BoardContext} from './Board';

function Tile({x, y, mine}) {
  const [tileText, setTileText] = useState('');
  const [clicked, setClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);

  const board = useContext(BoardContext);

  useEffect(()=>{
    if(clicked){
      setTileText(nearbyTiles(board, x, y));
      if(mine) setTileText(TILE_OPTIONS.BOMB);
    }
  }, [clicked])

  const handleClicks = (e) => {
    e.preventDefault();

    if(e.type === 'click'){
      setClicked(true);
    }else if(e.type === 'contextmenu'){
      setRightClicked(true);
    }
  }


  return (
    <Col className='board-element' onClick={()=> setClicked(true)} onContextMenu={(e) => handleClicks(e)}>{tileText}</Col>
  )
}

export default Tile

const TILE_OPTIONS = {
  BOMB: "💣",
  FLAG: "🚩",
  EMPTY: "",
  HIDDEN: "",
};

const nearbyTiles = (board, x, y) => {
  const tiles = [];

  for(let xOffset = -1; xOffset <= 1; xOffset++){
    for(let yOffset = -1; yOffset <= 1; yOffset++){
      const tile = board[x + xOffset]?.[y+yOffset]?.props.mine;
      if(tile) tiles.push(tile);
    }
  }
  return tiles.length > 0 ? tiles.length : '';
}