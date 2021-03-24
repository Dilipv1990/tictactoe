import React from 'react';

import { SIGN } from '../Board/Board';

interface OwnProps {
  row: number;
  column: number;
  sign: SIGN;
  state: Record<string, SIGN>;
  setState: (pos: string, sign: SIGN) => void;
}

const Box: React.FC<OwnProps> = ({
  row,
  column,
  sign,
  state,
  setState,
}: OwnProps) => {
  return (
    <div
      className="box"
      style={{
        width: '40px',
        height: '40PX',
        border: '1px solid black',
      }}
      onClick={() => setState(`${row}${column}`, sign)}
    >
      {state[`${row}${column}`] === SIGN.X && 'X'}
      {state[`${row}${column}`] === SIGN.O && 'O'}
    </div>
  );
};

export default Box;
