'use client';
import '../style/tictactoe.css'


type SquareProps = {
    value: (string | null)[];
    onSquareClick:(index: number) =>void;
    rowIndex : number;
};
export const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <div className="board-row">
      {value.map((val, idx) => (
        <button
          key={idx}
          className="square"
          onClick={() => onSquareClick(idx)}
        >
          {val}
        </button>
      ))}
    </div>
  );
};
