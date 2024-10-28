import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/aaron-logo.png";
import arrow from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { coinData, currency, setCurrency } = useContext(CoinContext);
  const naviagte = useNavigate();

  const currencySelection = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default:
        setCurrency({ name: "use", symbol: "$" });
        break;
    }
  };
  return (
    <div className="navbar">
      <img onClick={() => naviagte("/")} className="logo" src={logo} alt="" />

      <ul>
        <li onClick={() => naviagte("/")}>Home</li>
        <li onClick={() => naviagte("/feature")}>Feature</li>
        <li onClick={() => naviagte("/prices")}>Price</li>
        {/* <li>Blog</li> */}
      </ul>

      <div className="nav-right">
        <select onChange={currencySelection}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign up <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
