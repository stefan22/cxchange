import React from 'react';

const AmountField = ({ fiatAmt, onChange }) => {
  return (
    <form className="form-section">
      <label htmlFor="fiat">Amount:</label>
      <input id="fiat" type="number" value={fiatAmt} onChange={onChange} />
    </form>
  );
};

export default AmountField;
