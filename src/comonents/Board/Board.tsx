import React, { useEffect, useState } from 'react';

import { range } from '../../utils/UtilFunctions';
import Box from '../Boxes/Box';

export enum SIGN {
  X = 'X',
  O = 'O',
}

const Board: React.FC = () => {
  const dimension = 5;
  const numOfConsecutiveNeeded = 3;
  const [currentSign, setCurrentSign] = useState(SIGN.X);
  const [state, setState] = useState<Record<string, SIGN>>({});

  const annonceWinner = (s: SIGN) => {
    console.log(`${s} won`);
  };

  useEffect(() => {
    for (let row = 0, column = 0; row < dimension; column++) {
      if (column >= dimension) {
        column = 0;
        row++;
        continue;
      }
      const signAssigned = state[`${row}${column}`];
      // check row for match
      if (column <= dimension - numOfConsecutiveNeeded && signAssigned) {
        let j = 0;
        for (; j <= numOfConsecutiveNeeded; j++) {
          if (state[`${row}${column + j}`] !== signAssigned) {
            break;
          }
        }
        if (j === numOfConsecutiveNeeded) {
          annonceWinner(signAssigned);
          return;
        }
      }
      // check column for match
      if (row <= dimension - numOfConsecutiveNeeded && signAssigned) {
        let i = 0;
        for (; i <= numOfConsecutiveNeeded; i++) {
          if (state[`${row + i}${column}`] !== signAssigned) {
            break;
          }
        }
        if (i === numOfConsecutiveNeeded) {
          annonceWinner(signAssigned);
          return;
        }
      }
      // check cross right for match
      if (
        row <= dimension - numOfConsecutiveNeeded &&
        column <= dimension - numOfConsecutiveNeeded &&
        signAssigned
      ) {
        let i = 0,
          j = 0;
        for (; i <= numOfConsecutiveNeeded; i++, j++) {
          if (state[`${i}${j}`] !== signAssigned) {
            break;
          }
        }
        if (i === numOfConsecutiveNeeded) {
          annonceWinner(signAssigned);
          return;
        }
      }
      // check cross left for match
      if (
        row <= dimension - numOfConsecutiveNeeded &&
        column - numOfConsecutiveNeeded + 1 >= 0 &&
        signAssigned
      ) {
        let i = 0,
          j = column;
        for (; i <= numOfConsecutiveNeeded; i++, j--) {
          if (state[`${i}${j}`] !== signAssigned) {
            break;
          }
        }
        if (i === numOfConsecutiveNeeded) {
          annonceWinner(signAssigned);
          return;
        }
      }
    }
  }, [state]);

  return (
    <section>
      <div
        className="board"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          flexWrap: 'wrap',
          flexDirection: 'column',
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
        {range({ end: dimension - 1 }).map((row: number) => (
          <div key={`${row}`} style={{ display: 'flex' }}>
            {range({ end: dimension - 1 }).map((column: number) => (
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
      <button onClick={() => setState({})}>Reset</button>
    </section>
  );
};

export default Board;
