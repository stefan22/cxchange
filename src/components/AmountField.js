import React from 'react';
import { useDispatch } from 'react-redux';

const AmountField = ({ fiatAmt }) => {
  const dispatch = useDispatch();
  function onChange(e) {
    dispatch({ type: 'amountUpdate', payload: e.target.value });
  }

  return (
    <form className="form-section">
      <label>Amount:</label>
      <input type="number" value={fiatAmt} onChange={onChange} />
    </form>
  );
};

export default AmountField;
