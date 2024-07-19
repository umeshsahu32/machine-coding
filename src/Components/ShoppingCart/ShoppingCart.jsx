import React, { Fragment, useState } from "react";
import ShopHeader from "./ShowHeader";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import ShowHome from "./ShowHome.jsx";
import ShopCart from "./ShopCart.jsx";

const ShoppingCart = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <Fragment>
      {/* <HeadingComponent heading="Shopping Cart" /> */}
      <ShopHeader onClick={() => setShowCart(true)} />
      {showCart ? (
        <ShopCart onClick={() => setShowCart(false)} />
      ) : (
        <ShowHome />
      )}
    </Fragment>
  );
};

export default ShoppingCart;
