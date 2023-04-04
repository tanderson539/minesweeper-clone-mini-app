import { createContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Tile from "./Tile";
import { BsPrefixComponent } from "react-bootstrap/esm/helpers";

export const MinesContext = createContext([]);
export const BoardContext = createContext([]);

function Board({ size, mines }) {
  const [board, setBoard] = useState([]);
  const [mineIndexes, setMineIndexes] = useState([]);

  useEffect(() => {
    const newBoard = [];

    let bombIndexes = [];

    for (let i = 0; i < mines; i++) {
      let rand = (Math.random() * (size * size - 1)).toFixed();
      if (!bombIndexes.includes(rand)) {
        bombIndexes.push(rand);
      } else {
        i--;
      }
    }

    console.log(bombIndexes);
    setMineIndexes(bombIndexes);

    for (let i = 0; i < size; i++) {
      let row = [];
      for (let e = 0; e < size; e++) {
        row.push(
          <Tile
            x={i}
            y={e}
            mine={bombIndexes.includes((i * 10 + e).toString())}
          />
        );
      }
      newBoard.push(row);
    }
    console.log(newBoard);
    setBoard(newBoard);
  }, [size]);

  return (
    <MinesContext.Provider value={mineIndexes}>
      <BoardContext.Provider value={board}>
        <Container fluid className="board">
          {board.map((row, index) => {
            return (
              <Row>
                {row.map((element, i) => {
                  return element;
                })}
              </Row>
            );
          })}
        </Container>
      </BoardContext.Provider>
    </MinesContext.Provider>
  );
}

export default Board;
