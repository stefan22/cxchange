import data from "./data.json";

/* 
  Off data:  
  rates = {USD:1, EUR: 0.82, JPYT: 109.38, GBP: 0.71}
  search = "base=USD&symbols=EUR,GBP,JPY"
*/

// simulating network call
const simulate = (time) => new Promise((res) => setTimeout(res, time));

export async function fetch(url) {
  const search = url.split("?")[1];
  const params = new URLSearchParams(search);
  const base = params.get("base");
  const rates = data[base];

  await simulate(400);
  return {
    //response body not read yet
    async json() {
      return {
        rates
      }
    }
  }
 
}











// return {
//   // simulate JSON response
//   async json() {
//     return {
//       success: true,
//       rates,
//     };
//   },
// };