import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

//   const fetchAllCoin = async () => {
//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         "x-cg-demo-api-key": "CG-5aewLrNcZfuAj3gRsLDRBnAW",
//       },
//     };

//     fetch(
//       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => setAllCoin(response))
//       .catch((err) => console.error(err));
//   };

  useEffect(() => {
    //Using Promise
    axios({
        url:`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        method:"GET"
    })
      .then((res) => {
        console.log(res.data);
        setAllCoin(res.data);
      })

    // fetchAllCoin();
  }, [currency]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };
  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
