import { useState, useEffect } from "react";
import FiatSelect from '../components/FiatSelect'
import AmountField from '../components/AmountField'
import { useSelector } from "react-redux";
import DataTable from '../components/Table'
import { getExchangeRates } from "./api/api";


const allCurrencies = ["USD", "EUR", "GBP", "JPY"];

const CXchange = () => {

    const fiatAmt = useSelector((state) => state.fiatAmt);
    const fiat = useSelector((state) => state.fiat)

    const [data, setData] = useState({ USD: 1 });

    useEffect(() => {
        getExchangeRates(fiat, allCurrencies).then((rates) => {
            setData(rates);
        })
    },[fiat])

    return (
        <section>
            <h1>CXchange App</h1>
            <label>Currency:
                <FiatSelect
                    allCurrencies={allCurrencies}
                    fiat={fiat}
                />
            </label>

            <br />


            <div className="fiat-amount">
                <AmountField fiatAmt={fiatAmt} />
            </div>


            <div className="data-table">
                <h2>Exchange Rates</h2>
                <DataTable data={data} fiatAmt={fiatAmt}
                />
            </div>


        </section>
    )

}


export default CXchange;