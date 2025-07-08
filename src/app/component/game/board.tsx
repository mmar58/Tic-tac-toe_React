'use client';
import { useEffect, useState } from 'react';
import { Square } from './square';
import { Title } from '../elements/title';
import { Button } from '../elements/button';
import { Timer } from '../elements/timer';
import { SettingsModal } from '../popup/settingsModal';

export const Board: React.FC = () => {
  // Game board states
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Game result state
  const [winner, setWinner] = useState<string | null>(null);
  const [winningLine, setWinningLine] = useState<number[]>([]);

  // Settings
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(50);
  const [turnTime, setTurnTime] = useState(30);

  // Evaluate winner reactively on board update
  useEffect(() => {
    const result = calculateWinner(squares);
    setWinner(result.winner);
    setWinningLine(result.line);
  }, [squares]);

  const handleClick = (i: number) => {
    if (squares[i] || winner) return;

    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const renderStatus = () => {
    if (winner) return `Winner: ${winner}`;
    if (!squares.includes(null)) return "It's a draw";
    return `Next: ${xIsNext ? 'X' : 'O'}`;
  };

  return (
    <>
      <div className='main'>
        <div className='game'>
          <div className='title'>
            <Title title='tic-tac-toe' />
          </div>
          <div className='game-bg'>
            <div className='winner'>
              <h1>{renderStatus()}</h1>
            </div>
            <div className='board'>
              {[0, 3, 6].map((start) => (
                <div key={start} className='board-row'>
                  <Square
                    value={squares.slice(start, start + 3)}
                    onSquareClick={handleClick}
                    rowIndex={start / 3}
                    startNumber={start}
                    winningLine={winningLine}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className='game-settings'>
            <Button text='Play With Computer' />
            <Button text='Play With Friend' />
            <Button onClick={() => setShowSettings(true)} text='Settings' />
          </div>
        </div>

        <div className='game-dettails'>
          <Timer text='Timer: 00:00' />
        </div>

        {showSettings && (
          <SettingsModal
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            volume={volume}
            setVolume={setVolume}
            turnTime={turnTime}
            setTurnTime={setTurnTime}
            onClose={() => setShowSettings(false)}
          />
        )}
      </div>
    </>
  );
};

// 🧠 Pure function — no side effects!
function calculateWinner(squares: (string | null)[]): {
  winner: string | null;
  line: number[];
} {
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
      return { winner: squares[a], line: [a, b, c] };
    }
  }

  return { winner: null, line: [] };
}
