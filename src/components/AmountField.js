
const AmountField = (
    {
        fiatAmt,
        onChange
    }) => {

    return (
        <form className="form-section">
            <input
                type="number"
                value={fiatAmt}
                onChange={onChange}

            />

        </form>
    )

}


export default AmountField;