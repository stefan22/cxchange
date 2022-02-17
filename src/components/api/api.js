
//mock rate data
import { fetch } from "./getData";


// helper API call
export function getExchangeRates(base, supportedCurrencies) {
  //exclude base
  const symbols = supportedCurrencies.filter((symbol) => symbol !== base) .join();
  //url
  const url = `localhost:3000/?base=${base}&symbols=${symbols}`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let dataRates = data.rates;
      //console.log('w dataRates ', dataRates);
      return dataRates;
    });
}

