'use client';
import { useState } from 'react';
import { Square } from './square';

export const Board: React.FC = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null))
  const [xIsnext, setXIsnext] = useState(true)
  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquare = squares.slice();
    nextSquare[i] = xIsnext ? 'X' : 'O';

    setSquares(nextSquare);
    setXIsnext(!xIsnext);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`
  } else if (!squares.includes(null)) { 
    status = "It is draw"
  } else {
    status = `Winner: ${xIsnext ? 'X' : 'O'}`
  }

  return (

    <>
      <div className='game'>
        <div className='game-bg'>
          <div className='winner'>{status}</div>
          <div className='board'>
            <div className='board-row'>
              <Square value={squares.slice(0, 3)}
                onSquareClick={(i) => handleClick(i)}
                rowIndex={(0)}
                startNumber={0}
              />
            </div>
            <div className='board-row'>
              <Square value={squares.slice(3, 6)}
                onSquareClick={(i) => handleClick(i)}
                rowIndex={(0)}
                startNumber={3}
              />
            </div>
            <div className='board-row'>
              <Square value={squares.slice(6, 9)}
                onSquareClick={(i) => handleClick(i)}
                rowIndex={(0)}
                startNumber={6}
              />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};




function calculateWinner(squares: (string | null)[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}