import { useDispatch } from "react-redux"

const FiatSelect = ({ allCurrencies, fiat }) => {
    const dispatch = useDispatch();
    function onChange(e) {
        dispatch({type: 'fiatSelect', payload: e.target.value})
    }

    return (
        <select className="select-fiat" value={fiat} onChange={onChange}>
            {
                allCurrencies.map((code) => (
                    <option key={code} value={code}>
                        {code}
                    </option>

            ))}

        </select>
    )
}


export default FiatSelect