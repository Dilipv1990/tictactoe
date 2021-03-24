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
  const [currentSign, setCurrentSign] = useState(SIGN.X);
  const [state, setState] = useState<Record<string, SIGN>>({});

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
        <div key={`${row}`}>
          {range({ end: count - 1 }).map((column: number) => (
            <Box
              row={row}
              column={column}
              key={`${row}${column}`}
              sign={currentSign}
              state={state}
              setState={(pos: string, sign: SIGN) =>
                setState((oldState) => ({ ...oldState, [pos]: sign }))
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
