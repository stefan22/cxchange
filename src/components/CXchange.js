import { useState, useCallback, useEffect } from "react";
import CryptoSelect from '../components/CryptoSelect'


const allCryptos = ["USD","EUR","CAD","GBP","MXN"];

const CXchange = () => {
    const [crypto,setCrypto] = useState("USD");
    const [cryptoAmt, setCryptoAmt] = useState(0);

    const handleCryptoChange = useCallback((e) => {
        setCrypto(e.target.value)
    })

    return (
        <section>
            <h1>CXchange</h1>
            <CryptoSelect
                onChange={handleCryptoChange}
                allCryptos={allCryptos}
                crypto={crypto}
            />

           

        </section>
    )

}


export default CXchange;