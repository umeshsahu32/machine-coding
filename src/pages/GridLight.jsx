import React from "react";
import { useState } from "react";

const GridLight = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [0, 1, 1],
    [1, 1, 1],
  ];

  const deactivateCell = () => {
    setIsDeactivating(true);

    let timer = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = [...originalOrder];
        newOrder.pop();

        if (newOrder.length === 0) {
          setIsDeactivating(false);
          clearInterval(timer);
        }

        return newOrder;
      });
    }, 300);
  };

  const activateCellHandler = (i) => {
    let newOrder = [...order, i];
    setOrder(newOrder);

    if (newOrder.length === config.flat().filter(Boolean).length) {
      deactivateCell();
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center p-10 gap-6">
      <h3 className="text-3xl text-blue-800 font-bold">Grid Light</h3>
      <div
        className="grid gap-7"
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {config.flat().map((item, i) => {
          return item ? (
            <button
              onClick={() => activateCellHandler(i)}
              className={`w-32 h-32 border-2 border-blue-700 rounded-lg ${
                order.includes(i) ? "bg-blue-500" : ""
              }`}
              key={i}
              disabled={isDeactivating || order.includes(i)}
            ></button>
          ) : (
            <span key={i}></span>
          );
        })}
      </div>
    </div>
  );
};

export default GridLight;
