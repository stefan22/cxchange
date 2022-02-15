const CryptoSelect = (
    {
        allCryptos,
        crypto,
        onChange,
    
    }) => {
    

    return (
        <select className="select-crypto" value={crypto} onChange={onChange}>
            {
                allCryptos.map((code) => (
                    <option key={code} value={code}>
                        {code}
                    </option>

            ))}

        </select>
    )
}


export default CryptoSelect