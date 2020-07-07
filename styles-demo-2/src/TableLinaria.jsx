import React from 'react';
import { styled } from 'linaria/react';

const Table = styled.div`
  display: table;
  margin-top: 10px;
`;

const Row = styled.div`
  display: table-row;
`;

const Cell = styled.div`
  display: table-cell;
  padding: 10px;
  background: rgba(255,105,180, ${props => props.value});
`;


// const Cell = styled('div')({
//     name: 'Cell',
//     class: 'Cell_cjdc1ue',
//     vars: {
//       'cjdc1ue-0': [props => props.value],
//     },
// });


// --cjdc1ue-0: 0.6038

// .cjdc1ue {
//     display: table-cell;
//     padding: 10px;
//     background: rgba(255,105,180,var(--cjdc1ue-0));
// }

export default ({ table, toPercent }) => (
  <Table>
    {table.map((row, i) => (
      <Row key={i}>
        {row.map((x, j) => (
          <Cell key={`${i}${j}`} value={x}>{toPercent(x)}</Cell>
        ))}
      </Row>
    ))}
  </Table>
)