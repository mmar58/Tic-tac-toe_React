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
      <div className='game flex flex-col max-2xl:text-center w-full'>
        <div className="title flex flex-1 flex-wrap pb-7">
          <div className='shrink 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full md:text-center lg:text-end xl:text-start max-2xl:w-full max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full max-2xl:text-center max-xl:text-center max-lg:text-center max-md:text-center max-sm:text-center'>
            <Title title='tic-tac-toe' />
          </div>
          <div className='shrink 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xl:text-center max-2xl:w-full max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full max-2xl:text-center max-xl:text-center max-lg:text-center max-md:text-center max-sm:text-center'>
            <Timer text='00:00' />
          </div>
        </div>
        <div className="game-box flex flex-col max-2xl:items-center lg:items-start xl:items-start xl:pl-6 lg:p-0 ">
          <div className=' flex flex-col items-start'>

            <div className="board-bg text-center">
              <div className="game-bg">
                <div className='winner'>
                  <h1>{renderStatus()}</h1>
                </div>
                <div className="board-bg">
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
              </div>

              <div className='game-settings flex flex-col gap-4 mt-7 pt-7 '>
                <div className='shrink '>
                  <Button text='Play With Computer' />
                </div>
                <div className='shrink '>
                  <Button text='Play With Friend' />
                </div>
                <div className='shrink '>
                  <Button onClick={() => setShowSettings(true)} text='Settings' />
                </div>
              </div>
            </div>
          </div>

        </div>

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
