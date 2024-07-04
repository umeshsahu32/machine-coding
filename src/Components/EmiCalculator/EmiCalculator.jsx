import React from "react";
import { Fragment, useState, useEffect } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./EmiCalculator.module.css";

const EmiCalculator = () => {
  const [data, setData] = useState({
    principal: "",
    interest: "",
    year: "",
  });

  const [emi, setEMI] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: parseInt(value),
    });
  };

  // P(r(1+r)^n/((1+r)^n)-1))

  //   Example 1
  //   let result = Math.pow(2, 3);
  //   console.log(result); // Output: 8
  //   In this example, 2 is the base and 3 is the exponent, so 2^3 = 8.

  //   Example 2
  //   let square = Math.pow(5, 2);
  //   console.log(square); // Output: 25
  //   Here, 5 is the base and 2 is the exponent, so 5^2 = 25.

  //   Example 3
  //   let cube = Math.pow(4, 3);
  //   console.log(cube); // Output: 64
  //   In this case, 4 is the base and 3 is the exponent, so 4^3 = 64.

  const calculateEMI = () => {
    let { principal: p, interest: r, year: t } = data;

    if (p && r && t) {
      r = r / 12 / 100; // per month
      t = t * 12; // per month

      const calcPow = Math.pow(1 + r, t);
      const amount = p * ((r * calcPow) / (calcPow - 1));
      setEMI(Math.round(amount));
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [data]);

  return (
    <Fragment>
      <HeadingComponent heading="EMI Calculator" />
      <div className={styles.loan_calc}>
        <div className={styles.inputs}>
          <div>
            <label htmlFor="principal">Principal</label>
            <input
              onChange={handleChange}
              type="number"
              id="principal"
              name="principal"
              value={data.principal}
            />
          </div>
          <div>
            <label htmlFor="interest">Interest</label>
            <input
              onChange={handleChange}
              type="number"
              id="interest"
              name="interest"
              value={data.interest}
            />
          </div>
          <div>
            <label htmlFor="year">Years</label>
            <input
              onChange={handleChange}
              type="number"
              id="year"
              name="year"
              value={data.year}
            />
          </div>
          <div className={styles.output}>Your EMI is {emi}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default EmiCalculator;
