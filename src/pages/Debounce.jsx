import React, { useState, useEffect } from "react";

const Debounce = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const fetchItems = async (URL) => {
    setLoading(true);
    try {
      const result = await fetch(URL);
      const data = await result.json();
      setLoading(false);
      return data;
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const debouceFn = (fn, delay) => {
    if (typeof fn !== "function") {
      throw new Error("Invalid Fn");
    }

    if (typeof delay !== "number" || delay < 0) {
      throw new Error("Invalid Delay");
    }

    let timeOut;

    return (...args) => {
      return new Promise((resolve) => {
        window.clearTimeout(timeOut);
        timeOut = window.setTimeout(async () => {
          const data = await fn(...args);
          resolve(data);
        }, 1000);
      });
    };
  };

  const debouceQuery = debouceFn(fetchItems, 1000);

  const initialCall = async () => {
    const url = `https://api.frontendeval.com/fake/food/${input}`;
    const result = await debouceQuery(url);
    setList(result);
  };

  useEffect(() => {
    if (input) {
      initialCall();
    }
  }, [input]);

  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="flex flex-col justify-center items-center gap-6 p-10">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="w-[20%] px-3 py-3 rounded border-2 border-gray-400 outline-none"
          placeholder="Type Here..."
        />
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <div className="bg-gray-400 w-[20%]">
            {list &&
              list.length > 0 &&
              list.map((item) => {
                return (
                  <div className="p-2 px-4 border-b border-white">
                    <span>{item}</span>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Debounce;
