import React from 'react';

const DataTable = ({ data, fiatAmt }) => {
  // console.log('data is ', data, 'fiat amt is ', fiatAmt);
  return (
    <>
      <table className="crypto-table">
        <tbody>
          {Object.entries(data).map(([crcy, rate]) => {
            const xamt = fiatAmt * rate || 0.0;
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
      <p
        style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          padding: '0.5rem 0 1rem',
          display: 'flex',
          flexDirection: 'column',
          color: '#fafafa',
        }}
      >
        Currency Exchange Rate
      </p>
    </>
  );
};

export default DataTable;
