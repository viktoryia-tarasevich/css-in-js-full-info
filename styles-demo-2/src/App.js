import React, { useState, useEffect } from 'react';
import './App.css';

import Table from './Table'
import TableClean from './TableClean'
import TableSC from './TableStyledComponents'
import TableLinaria from './TableLinaria'
import TableReshadow from './TableReshadow'

function getTable(max = 30) {
  let table = [];
  for (let i = 0; i < max; i++) {
    table[i] = [1];
    for (let j = 1; j < max; j++) {
      const next = table[i][j - 1] - Math.random() * table[i][j - 1] / 10;
      table[i].push(next.toFixed(4));
    }
  }
  return table;
}

function toPercent(x) {
  return (x * 100).toFixed(2).toString() + '%';
}

const LIBS = ['React Only', 'Emotion', 'Styled Components', 'Linaria', 'Reshadow']

const listOfLibs = (lib, handleChange) => {

  return LIBS.map(item=>
    <label>
      <input
        type="radio"
        value={item}
        checked={lib === item}
        onChange={()=>{
          handleChange(item)
        }}
      />
      {item}
    </label>
 )
}

const drawTable = (lib) => {
  switch(lib) {
    case 'React Only':
      return <TableClean table={getTable()} toPercent={toPercent}/>;
    case 'Emotion':
      return <Table table={getTable()} toPercent={toPercent}/>;
    case 'Styled Components':
      return <TableSC table={getTable()} toPercent={toPercent}/>;
    case 'Linaria':
      return <TableLinaria table={getTable()} toPercent={toPercent}/>;
    case 'Reshadow':
      return <TableReshadow table={getTable()} toPercent={toPercent}/>;
    default:
      return <div></div>
  }
}

function App() {
  const [lib, setLib] = useState()

  return (
    <div className="App">
       {listOfLibs(lib, setLib)}
       {drawTable(lib)}
    </div>
  );
}

export default App;
