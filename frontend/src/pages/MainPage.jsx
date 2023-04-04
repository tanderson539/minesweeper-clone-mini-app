import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Board from '../components/Board';

export default function MainPage() {
  const [boardSize, setBoardSize] = useState(10);
  const [mines, setMines] = useState(10);

  return (
    <Container>
      <h1>Minesweeper</h1>
      <Row className="justify-content-md-center">
        <Col className='g-4'>
          <Board size={boardSize} mines={mines}/>
        </Col>
      </Row>
    </Container>
  )
}
