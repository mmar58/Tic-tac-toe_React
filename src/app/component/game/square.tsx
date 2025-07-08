'use client';
import '../../style/tictactoe.css'


type SquareProps = {
    value: (string | null)[];
    onSquareClick:(index: number) =>void;
    rowIndex : number;
    startNumber:number;
    winningLine?:number[]
};
export const Square: React.FC<SquareProps> = ({ value, onSquareClick,startNumber,winningLine}) => {
  console.log(winningLine)
  return (
    <div className="board-row">
      {value.map((val, idx) => {
        const curIndex = idx + startNumber;
        return  (
        <button
          key={idx}
          className={`square ${winningLine.includes(curIndex) ? 'winning' : ''}`}
          onClick={() => onSquareClick(curIndex)}
        >
          {val}
        </button>
      )
      })}
    </div>
  );
};
