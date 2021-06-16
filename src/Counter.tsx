import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useVisitCount } from './hooks/useVisitCount';

export const Counter = () => {
  const randomBigNumber = useVisitCount();
  const visitsArray = randomBigNumber.toString().split('');
  return (
    <GeocitiesCounter>
      <table>
        <tbody>
          <tr>
            {visitsArray.map((n) => (
              <td key={uuidv4()}>{n}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </GeocitiesCounter>
  );
};

const GeocitiesCounter = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  font-weight: bold;
  width: 207px;
  color: greenyellow;
  background-color: #444;
  padding: 5px;
  table {
    border: 5px ridge(2, 2, 1);
  }
  td {
    padding: 3px;
    border: 4px ridge;
  }
`;
