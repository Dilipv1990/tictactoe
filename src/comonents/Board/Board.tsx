import React, { useState } from 'react';

import { range } from '../../utils/UtilFunctions';
import Box from '../Boxes/Box';

export enum SIGN {
  X = 'X',
  O = 'O',
  NA = 'na',
}

const Board: React.FC = () => {
  const count = 3;
  let [currentSign, setCurrentSign] = useState(SIGN.X);
  return (
    <div
      className="board"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        // width: '300px',
        // height: '300px',
      }}
      onClick={() => {
        if (currentSign === SIGN.X) {
          setCurrentSign(SIGN.O);
        } else {
          setCurrentSign(SIGN.X);
        }
      }}
    >
      {range({ end: count - 1 }).map((row: number) => (
        <div>
          {range({ end: count - 1 }).map((column: number) => (
            <Box
              row={row}
              column={column}
              key={`${row}${column}`}
              sign={currentSign}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
