import React, { Fragment, useState, useEffect } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./CryptoConverter.module.css";
import axios from "axios";

const CryptoConverter = () => {
  const arr = ["usd", "eur", "gbp", "cny", "jpy"];
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [currency, setCurrency] = useState(0);
  const [convertedCurr, setConvertedCurr] = useState(0);
  const [isUp, setIsUp] = useState(true);
  const [diff, setDiff] = useState(0);

  const handleCurrencyType = (e) => {
    const type = e.target.value;
    console.log(type);
    setSelectedCurrency(type);
  };

  const fetchCurrencyInfo = async () => {
    try {
      const url = `https://api.frontendeval.com/fake/crypto/${selectedCurrency}`;
      const result = await axios.get(url);
      const val = result.data.value;
      console.log("val", val);
      const showCurr = currency * val;
      setConvertedCurr(showCurr.toFixed(2));

      const prevVal = window.sessionStorage.getItem("prevVal");
      console.log("prevVal : ", prevVal);
      console.log("currVal: ", showCurr.toFixed(2));
      const diff = showCurr.toFixed(2) - prevVal;
      diff < 0 ? setIsUp(false) : setIsUp(true);
      setDiff(diff.toFixed(2));

      window.sessionStorage.setItem("prevVal", showCurr.toFixed(2));
    } catch (err) {
      console.error("Error : ", err);
    }
  };

  useEffect(() => {
    let time;
    time = setInterval(() => {
      fetchCurrencyInfo();
    }, 3000);
    return () => {
      clearInterval(time);
    };
  }, [currency, selectedCurrency]);

  return (
    <Fragment>
      <HeadingComponent heading="Crypto Converter" />
      <div className={styles.parent}>
        <div className={styles.container}>
          <div className={styles.input_container}>
            <input
              type="text"
              required={true}
              onChange={(e) => setCurrency(e.target.value)}
            />
            <select
              onChange={handleCurrencyType}
              name="currency"
              value={selectedCurrency}
            >
              {arr.map((curr) => (
                <option key={curr} value={curr}>
                  {curr.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.currency_info}>
            <div className={styles.info}>
              <span className={styles.head}>Current Value</span>
              <span>{convertedCurr}</span>
            </div>
            <div>WUC</div>
            <div className={styles.info}>
              <span className={styles.head}>Change</span>
              <div className={isUp ? styles.green : styles.red}>
                <span>{isUp ? "↑" : "↓"}&nbsp;&nbsp;</span>
                <span>{diff}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CryptoConverter;
