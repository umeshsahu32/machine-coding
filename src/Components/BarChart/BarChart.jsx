import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import styles from "./BarChart.module.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";

const API_URL =
  "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new";

const BarChart = () => {
  const [frequency, setFrequency] = useState();
  const [yAxisData, setYAxisData] = useState([]);

  const CountFn = (data) => {
    let count = {};
    let updatedData = data.split("\n").filter(Boolean);
    for (let i of updatedData) {
      count[i] = (count[i] || 0) + 1;
    }

    return count;
  };

  const GetYAxisData = (data) => {
    const max = Math.max(...Object.values(data));
    const maxVal = Math.ceil(max / 10) * 10;
    let arr = [];
    for (let i = maxVal / 10; i >= 0; i--) {
      arr.push(i * 10);
    }
    return arr;
  };

  const fetchData = async () => {
    const result = await axios.get(API_URL);
    if (result.status === 200) {
      console.log(result.data);
      const data = CountFn(result.data);
      setFrequency(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (frequency) {
      const data = GetYAxisData(frequency);
      if (data) {
        setYAxisData(data);
      }
    }
  }, [frequency]);

  // @ JSX START
  return (
    <Fragment>
      <HeadingComponent heading="Bar Chart" />
      <div className={styles.parent}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div
              className={styles.box_y_axis}
              style={{ height: `${yAxisData && yAxisData[0]}%` }}
            >
              {yAxisData.map((value, idx) => (
                <div key={idx}>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            {frequency &&
              Object.entries(frequency)?.map(([key, val]) => (
                <div className={styles.box_x_axis}>
                  <div
                    data-tooltip-id="my-tooltip-1"
                    data-tooltip-content={val}
                    style={{
                      height: `${val}%`,
                    }}
                    className={styles.graph}
                  ></div>
                  <div className={styles.index}>{key}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <ReactTooltip
        id="my-tooltip-1"
        place="top"
        style={{
          Color: "rgb(238, 237, 235)",
          backgroundColor: "rgb(47, 54, 69)",
          fontWeight: "bold",
        }}
      />
    </Fragment>
  );
};

export default BarChart;
