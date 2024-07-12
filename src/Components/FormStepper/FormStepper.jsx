import React, { Fragment } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import CheckoutStepper from "./CheckoutStepper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div> Your order has been delivered.</div>,
  },
];

const FormStepper = () => {
  return (
    <Fragment>
      <HeadingComponent heading="Form Stepper" />
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </Fragment>
  );
};

export default FormStepper;
