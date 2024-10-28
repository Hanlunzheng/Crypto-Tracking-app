import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinConextProvider = (props) => {
  const [coinData, setCoinData] = useState([]);

  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-j2oAX9NNMJ2GfLMAwWNs1Kap",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);
  const contextValue = { coinData, currency, setCurrency };
  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinConextProvider;
