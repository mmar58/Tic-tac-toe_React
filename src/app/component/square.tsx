'use client';
import '../style/tictactoe.css'


type SquareProps = {
    value: (string | null)[];
    onSquareClick:(index: number) =>void;
    rowIndex : number;
    startNumber:number;
};
export const Square: React.FC<SquareProps> = ({ value, onSquareClick,startNumber }) => {
  return (
    <div className="board-row">
      {value.map((val, idx) => (
        <button
          key={idx}
          className="square"
          onClick={() => onSquareClick(idx+startNumber)}
        >
          {val}
        </button>
      ))}
    </div>
  );
};
