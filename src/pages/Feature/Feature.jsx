import React, { useContext, useEffect, useState } from "react";
import "./Feature.css";

import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Feature = () => {
  const { coinData, currency } = useContext(CoinContext);

  const [DisplayData, setDisPlayData] = useState([]);
  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;
  const totalPages = Math.ceil(DisplayData.length / itemsPerPage);

  useEffect(() => {
    setDisPlayData(coinData);
  }, [coinData]);

  const SearchHandler = async (e) => {
    e.preventDefault();
    const coins = await coinData.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisPlayData(coins);
  };

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisPlayData(coinData);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = DisplayData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="home">
      <div className="hero">
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

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p style={{ textAlign: "right" }}>Market Cap</p>
        </div>

        {currentItems.map((dataItem, index) => (
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

      {/* Pagination controls */}
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Feature;
