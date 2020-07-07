import React from 'react';
import styled from 'reshadow/macro';

const Table = ({table, toPercent}) => styled`
  table {
    display: table;
    margin-top: 10px 10px 10px 0;
  }
  row {
    display: table-row;
  }
`(
  <table as="div">
    {table.map((row, i) => (
      <row>
        {row.map((x, j) => styled`
          cell {
            display: table-cell;
            padding: 10px;
            background: rgba(255,105,180, ${x});
          }
        `(<cell>{toPercent(x)}</cell>))}
      </row>
    ))}
  </table>,
);

export default Table;