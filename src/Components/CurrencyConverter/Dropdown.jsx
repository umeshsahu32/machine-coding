import React, { Fragment } from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi2";

const Dropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorite,
  title = "",
}) => {
  const isFavorite = (curr) =>
    favorites.map((item) => item.value).includes(curr);

  //   @ JSX START
  return (
    <Fragment>
      <div>
        <label
          htmlFor={title}
          className="block text-sm font-medium text-gray-700"
        >
          {title}
        </label>

        <div className="mt-2 relative">
          <select
            value={currency.value}
            onChange={(e) => {
              const selectedOption = e.target.options[e.target.selectedIndex];
              setCurrency({
                value: selectedOption.value,
                currency: selectedOption.text.split(": ")[0],
              });
            }}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {favorites.map((currency, index) => {
              return (
                <option
                  className="bg-gray-200"
                  value={currency.value}
                  key={index}
                >
                  {currency.currency} : {currency.value}
                </option>
              );
            })}
            <hr />
            {currencies
              .filter(
                (c) => !favorites.map((item) => item.value).includes(c.value)
              )
              .map((item, index) => {
                return (
                  <option value={item.value} key={index}>
                    {item.currency} : {item.value}
                  </option>
                );
              })}
          </select>
          <button
            onClick={() => handleFavorite(currency)}
            className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"
          >
            {isFavorite(currency.value) ? <HiStar /> : <HiOutlineStar />}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Dropdown;
