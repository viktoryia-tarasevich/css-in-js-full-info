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

async function runTestRerender() {
  const input = document.querySelector('input');
  for (let i = 0; i < 10; i++) {
    await new Promise(resolve => {
      performance.mark('startRerender' + i);
      input.click();

      setTimeout(() => {
        setTimeout(() => {
          performance.mark('endRerender' + i);
          performance.measure(
            'measureRerender' + i,
            'startRerender' + i,
            'endRerender' + i
          );
          resolve();
        }, 0);
      }, 0);
    });
  }
}



function App() {
  const [runEmotion, setRunEmotion] = useState(false);
  const [runCommon, setRunCommon] = useState(false);
  const [runSc, setRunSC] = useState(false);
  const [runLinaria, setRunLinaria] = useState(false);
  const [runReshadow, setRunReshadow] = useState(false);

  useEffect(() => {
    const t0 = performance.now();
    return () => {
      const t1 = performance.now();
      console.log(`Call took ${t1 - t0} milliseconds.`);
    }
  });


  return (
    <div className="App">
       <button onClick={()=>{
          setRunEmotion(!runEmotion)
       }}>{`${!runEmotion? 'run emotion': 'clear emotion'}`}</button>
       <button onClick={()=>{
          setRunCommon(!runCommon)
        }}>
          run without libs
        </button>
        <button onClick={()=>{
          setRunSC(!runSc)
        }}>
          run sc
        </button>
        <button onClick={()=>{
          setRunLinaria(!runLinaria)
        }}>
          run linaria
        </button>
        <button onClick={()=>{
          setRunReshadow(!runReshadow)
        }}>
          run reshadow
        </button>
        {/*
          run with emotion
        </button>
        
        {runEmotion && new Array(5000).fill(null).map((__, i) => (
            <EmotionText key={i} name={'test' + i}></EmotionText>
        ))}
        {runCommon && new Array(5000).fill(null).map((__, i) => (
            <CommonText key={i} name={'test' + i}></CommonText>
        ))}
       */}

       
       {runEmotion && <Table table={getTable()} toPercent={toPercent}></Table>} 
       {runCommon && <TableClean table={getTable()} toPercent={toPercent}></TableClean>} 
       {runSc && <TableSC table={getTable()} toPercent={toPercent}></TableSC>} 
       {runLinaria && <TableLinaria table={getTable()} toPercent={toPercent}></TableLinaria>} 
       {runReshadow && <TableReshadow table={getTable()} toPercent={toPercent}></TableReshadow>} 
    </div>
  );
}

export default App;
