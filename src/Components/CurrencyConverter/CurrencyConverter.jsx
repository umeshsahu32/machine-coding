import React, { Fragment, useEffect, useState } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import axios from "axios";
import Dropdown from "./Dropdown";
import { HiArrowsRightLeft } from "react-icons/hi2";

const CurrenciesUrl = "https://api.frankfurter.app/currencies";
// const Url = "https://api.frankfurter.app/latest?amount=1&from=USD&to=INR";
const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState({
    currency: "United States Dollar",
    value: "USD",
  });
  const [toCurrency, setToCurrency] = useState({
    currency: "Indian Rupee",
    value: "INR",
  });
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [converting, setConverting] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [
      {
        currency: "Indian Rupee",
        value: "INR",
      },
    ]
  );

  const GetCurrencyList = async () => {
    const result = await axios.get(CurrenciesUrl);

    if (result.status == 200) {
      let formattedData = Object.keys(result.data).map((key) => {
        return {
          value: key,
          currency: result.data[key],
        };
      });

      setCurrencies(formattedData);
    } else {
      console.log("Something went wrong");
    }
  };
  useEffect(() => {
    GetCurrencyList();
  }, []);

  // Conversion -> https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
  const convertCurrency = async () => {
    if (!amount) return;
    setConverting(true);
    try {
      const result = await axios.get(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency.value}&to=${toCurrency.value}`
      );

      if (result.status == 200) {
        setConvertedAmount(
          result.data.rates[toCurrency.value] + " " + toCurrency.value
        );
      }
    } catch (error) {
      console.error("Error Fetching", error);
    } finally {
      setConverting(false);
    }
  };

  const handleFavorite = (currency) => {
    let updatedFavorites = [...favorites];

    let favCurr = updatedFavorites.map((item) => item.value);

    if (favCurr.includes(currency.value)) {
      updatedFavorites = updatedFavorites.filter(
        (fav) => fav.value !== currency.value
      );
    } else {
      updatedFavorites.push(currency);
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // @ JSX START
  return (
    <Fragment>
      <HeadingComponent heading="Currency Converter" />
      <div className="h-[80vh]">
        <div className="container">
          <div className="max-w-6xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md ">
            <h2 className="mb-5 text-3xl font-semibold text-gray-700 text-center">
              Currency Converter
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <Dropdown
                favorites={favorites}
                currencies={currencies}
                title="From:"
                currency={fromCurrency}
                setCurrency={setFromCurrency}
                handleFavorite={handleFavorite}
              />
              <div className="flex justify-center -mb-5 sm:mb-0">
                <button
                  onClick={swapCurrencies}
                  className="p-2  bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
                >
                  <HiArrowsRightLeft className="text-xl text-gray-700" />
                </button>
              </div>
              <Dropdown
                favorites={favorites}
                currencies={currencies}
                currency={toCurrency}
                setCurrency={setToCurrency}
                title="To:"
                handleFavorite={handleFavorite}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount:
              </label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-[20] p-2 border border-gray-300 rounded-md shadow-md focus:outline focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex justify-start mt-6">
              <button
                onClick={convertCurrency}
                className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                  ${converting ? "animate-pulse" : ""}`}
              >
                Convert
              </button>
            </div>
            {convertedAmount && (
              <div className="mt-4 text-lg font-medium text-left text-green-600">
                Converted Amount: {convertedAmount}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CurrencyConverter;
