import React from 'react';

const FiatSelect = ({ allCurrencies, fiat, onChange }) => {
  return (
    <select className="select-fiat" value={fiat} onChange={onChange}>
      {allCurrencies.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
};

export default FiatSelect;
