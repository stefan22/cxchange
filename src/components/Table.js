import React from 'react';

const DataTable = ({ data, fiatAmt }) => {
  //console.log('data is ', data, 'fiat amt is ', fiatAmt);
  return (
    <table className="crypto-table">
      <tbody>
        {Object.entries(data).map(([crcy, rate]) => {
          //console.log('1 ', data);
          const xamt = fiatAmt * rate || 0.0;
          //console.log(crcy, rate);
          return (
            <tr key={crcy}>
              <td>{crcy}</td>
              <td>
                {xamt.toLocaleString('en', {
                  style: 'currency',
                  currency: crcy,
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
