import React, { Fragment, useState } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./GridLights.module.css";

// ? CELL COMPONENT
const Cell = ({ filled, onClick, isDisabled, label }) => {
  return (
    <button
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      className={` ${styles.grid_cell} ${
        filled ? styles.grid_cell_activated : ""
      }`}
    />
  );
};

const GridLights = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  // ? DEACTIVATE CELL FUNCTION
  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    //!DEACTIVATION OF CELLS
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  return (
    <Fragment>
      <HeadingComponent heading="Grid Lights" />
      <div className={styles.grid_wrapper}>
        <div
          className={styles.grid_light}
          style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr )` }}
        >
          {config.flat(1).map((value, index) => {
            return value ? (
              <Cell
                key={index}
                label={`Cell ${index}`}
                filled={order.includes(index)}
                onClick={() => activateCells(index)}
                isDisabled={order.includes(index) || isDeactivating}
              />
            ) : (
              <span key={index}></span>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default GridLights;
