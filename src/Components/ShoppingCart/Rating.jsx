import React, { Fragment } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./ShoppingCart.module.css";

const Rating = ({ rating, onClick, style }) => {
  return (
    <Fragment>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </Fragment>
  );
};

export default Rating;
