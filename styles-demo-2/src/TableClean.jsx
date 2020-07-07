import React from 'react';
import './TableClean.css';

const Table = ({ table, toPercent }) => (
  <div className="table">
    {table.map((row, i) => (
      <div key={i} className="row">
        {row.map((x, j) => (
          <div
            key={`${i}${j}`}
            className="cell"
            style={{ background: `rgba(255,105,180, ${x})` }}
          >
            {toPercent(x)}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Table;