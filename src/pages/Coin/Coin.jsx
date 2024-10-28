import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";
const Coin = () => {
  const { coinId } = useParams();

  const [coinData, setCoinData] = useState();

  const [historicalData, setHirtoricalData] = useState();
  const [selectDays, setSelectDays] = useState("");

  const { currency } = useContext(CoinContext);

  const HandleSelectDays = (event) => {
    switch (event.target.value) {
      case "7": {
        setSelectDays("7");
        break;
      }
      case "30": {
        setSelectDays("30");
        break;
      }
      case "365": {
        setSelectDays("365");
        break;
      }
      default:
        setSelectDays("7");
        break;
    }
  };

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-j2oAX9NNMJ2GfLMAwWNs1Kap",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  const fetchHistorcialData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-j2oAX9NNMJ2GfLMAwWNs1Kap",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=${selectDays}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setHirtoricalData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // setSelectDays("7");
    fetchCoinData();
    fetchHistorcialData();
  }, [currency, selectDays]);
  console.log(coinData);
  console.log("historyicaldata", historicalData);
  console.log("currency", currency.name);

  console.log("selectdays", selectDays);

  if (coinData && historicalData) {
    return (
      <div className="bitcoin-page">
        <div className="option-days">
          <p>please select past days to analysis</p>
          <select onChange={HandleSelectDays}>
            <option value="7">Past 7 days</option>
            <option value="30">Past 30 days</option>
            <option value="365">Past 365 days</option>
          </select>
        </div>
        <div className="chart-data">
          <LineChart historicalData={historicalData} />
        </div>
        <div className="logo-title">
          <img src={coinData.image.large} style={{ width: "150px" }} alt="" />
          <p>
            {coinData.name}({coinData.symbol.toUpperCase()})
          </p>
        </div>
        <div className="info">
          <div className="info-detail">
            <p>Crypto Market Rank</p>
            <p>{coinData.market_cap_rank}</p>
          </div>

          <hr />
          <div className="info-detail">
            <p>Current Price</p>
            <p>{coinData.market_data.current_price[currency.name]}</p>
          </div>
          <hr />
          <div className="info-detail">
            <p>Market cap</p>
            <p>
              {currency.symbol}
              {coinData.market_data.market_cap[currency.name].toLocaleString()}
            </p>
          </div>
          <hr />
          <div className="info-detail">
            <p>24 Hour high</p>
            <p>
              {currency.symbol}
              {coinData.market_data.high_24h[currency.name].toLocaleString()}
            </p>
          </div>
          <hr />
          <div className="info-detail">
            <p>24 Hour low</p>
            <p>
              {coinData.market_data.low_24h[currency.name].toLocaleString()}
            </p>
          </div>
          <hr />
        </div>
      </div>
    );
  } else {
    <h1>Data is fetching please wait!</h1>;
  }
};

export default Coin;
