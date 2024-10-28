import React, { useContext, useEffect, useState } from "react";

import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { coinData, setCoinData, currency, setCurrency } =
    useContext(CoinContext);

  const [DisplayData, setDisPlayData] = useState([]);

  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  console.log("display data info", DisplayData);

  console.log("search data info", coinData);
  console.log("display coin info", coinData);

  const SearchHandler = async (e) => {
    e.preventDefault();
    const coins = await coinData.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisPlayData(coins);
    // if (!item.name.toLowerCase().includes(input.toLowerCase())) {
    // }
  };

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisPlayData(coinData);
    }
  };

  useEffect(() => {
    setDisPlayData(coinData);
  }, [coinData]);
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Aaron <br />
          Crypto Marketplace
        </h1>

        <p>
          all the data are fetching from https://www.coingecko.com. Since this
          is free version of API, please understand some of data will not be
          displayed, if you call api too many time within a short period of
          time!
        </p>
        <form onSubmit={SearchHandler}>
          <input
            onChange={inputHandler}
            value={input}
            list="coinlist"
            type="text"
            placeholder="Search Crypto.."
            required
          />

          <datalist id="coinlist">
            {coinData.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="ctypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}> 24H Change</p>
          <p style={{ textAlign: "right" }}>Market Cap</p>
        </div>
        {DisplayData.slice(0, 15).map((dataItem, index) => (
          <Link
            to={`/coin/${dataItem.id}`}
            className="table-layout"
            key={index}
          >
            <p>{dataItem.market_cap_rank}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img style={{ width: "30px" }} src={dataItem.image} alt="" />
              <p>{dataItem.name}</p>
            </div>

            <p>
              {currency.symbol}
              {dataItem.current_price.toLocaleString()}
            </p>
            <p
              style={{
                textAlign: "center",
                color: dataItem.price_change_24h < 0 ? "red" : "green",
              }}
            >
              {dataItem.price_change_24h.toFixed(2)}
            </p>
            <p style={{ textAlign: "right" }}>
              {currency.symbol}
              {dataItem.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
