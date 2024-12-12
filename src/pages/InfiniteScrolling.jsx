import React, { useState, useEffect } from "react";

const CryptoCard = ({ name, value, img }) => {
  return (
    <div className="bg-gray-400 h-[150px] border-2 border-gray-500 rounded-xl shadow-md flex justify-center items-center gap-5">
      <img src={img} alt={name} className="w-20 h-20 object-contain" />
      <div className="flex flex-col justify-center items-start">
        <strong>{name}</strong>
        <span>{`$${value.toFixed(2)}`}</span>
      </div>
    </div>
  );
};

const InfiniteScrolling = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchCryptoData = async () => {
    setLoading(true);
    try {
      const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=false`;
      const result = await fetch(URL);
      const data = await result.json();
      setCryptoData((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
  }, [page]);

  const handleScroll = () => {
    console.log("innerHeight", window.innerHeight);
    // height of the window always fixed,  This is useful for determining the visible portion of the webpage.
    console.log("scrollTop", document.documentElement.scrollTop);
    // pixels user have scrolled, Commonly used for tracking how far a user has scrolled on a page.
    console.log("scrollHeight", document.documentElement.scrollHeight);
    // height of the entire document, Useful for determining the total length of the content on a page.

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("cryptoData", cryptoData);

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="w-[1200px] m-auto">
        <h3 className="text-center py-5 text-3xl font-bold text-cyan-900">
          Crypto Data
        </h3>
        <div className="grid grid-cols-4 gap-5 p-5">
          {cryptoData.map((item, i) => {
            return (
              <CryptoCard
                key={i}
                name={item.name}
                value={item.current_price}
                img={item.image}
              />
            );
          })}
        </div>
        {loading && (
          <h2 className="text-center text-3xl font-bold py-10">Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default InfiniteScrolling;
