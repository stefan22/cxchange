import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import FiatSelect from '../components/FiatSelect';
import AmountField from '../components/AmountField';
import DataTable from '../components/Table';
import { getExchangeRates } from './api/api';

const allCurrencies = ['USD', 'EUR', 'GBP', 'JPY'];

const CXchange = () => {
  const [fiat, setFiat] = useState('USD');
  const [fiatAmt, setFiatAmt] = useState(1);
  const [data, setData] = useState({ USD: 1 });

  useEffect(() => {
    getExchangeRates(fiat, allCurrencies).then((rates) => {
      setData(rates);
    });
  });

  const handleFiatChange = useCallback((e) => {
    setFiat(e.target.value);
  }, []);

  const handleFiatAmount = useCallback((e) => {
    let amount = e.target.value;
    setFiatAmt(amount);
  }, []);

  return (
    <section>
      <h1>CXchange App</h1>
      <label>
        Currency:
        <FiatSelect
          onChange={handleFiatChange}
          allCurrencies={allCurrencies}
          fiat={fiat}
        />
      </label>

      <br />

      <div className="fiat-amount">
        <AmountField fiatAmt={fiatAmt} onChange={handleFiatAmount} />
      </div>

      <div className="data-table">
        <h2>Exchange Rates</h2>
        <DataTable data={data} fiatAmt={fiatAmt} />
      </div>
    </section>
  );
};

export default CXchange;
