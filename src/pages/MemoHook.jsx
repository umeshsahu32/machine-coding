import React, { useMemo, useState } from "react";

const MemoHook = () => {
  const [inputNumber, setInputNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }

  function nthPrime(n) {
    console.log("prime function called");
    if (n === 1) return 2;
    let count = 1;
    let num = 1;

    while (count < n) {
      num += 2;
      if (isPrime(num)) {
        count++;
      }
    }

    return num;
  }

  const primeValue = useMemo(() => {
    return nthPrime(inputNumber);
  }, [inputNumber]);

  return (
    <div
      className={`${
        isDark ? "bg-slate-700 text-white" : "bg-gray-200 text-black"
      } min-h-screen transition-all duration-300 ease-in-out`}
    >
      <div className="w-[40%] m-auto p-10 flex flex-col justify-center items-center gap-8">
        <button
          className={`border ${
            isDark ? "border-white" : "border-black"
          } px-5 py-2 rounded-lg`}
          onClick={() => setIsDark(!isDark)}
        >
          Toggle Background
        </button>
        <input
          type="number"
          onChange={(e) => setInputNumber(e.target.value)}
          className={`w-72 px-3 py-2 rounded-md outline-none shadow-lg text-slate-900 border border-slate-700`}
          value={inputNumber}
        />
        <div className="text-2xl py-6">{primeValue}</div>
      </div>
    </div>
  );
};

export default MemoHook;
