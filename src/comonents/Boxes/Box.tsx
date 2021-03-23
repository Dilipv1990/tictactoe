import React, { useState } from 'react';

import { SIGN } from '../Board/Board';

interface OwnProps {
  row: number;
  column: number;
  sign?: SIGN;
}

const Box: React.FC<OwnProps> = ({ row, column, sign = SIGN.NA }: OwnProps) => {
  let [currentSign, setCurrentSign] = useState(SIGN.NA);
  return (
    <div
      className="box"
      style={{
        width: '40px',
        height: '40PX',
        border: '1px solid black',
        // flexBasis: '33%',
      }}
      onClick={() => setCurrentSign(sign)}
    >
      {currentSign === SIGN.X && 'X'}
      {currentSign === SIGN.O && 'O'}
    </div>
  );
};

export default Box;
