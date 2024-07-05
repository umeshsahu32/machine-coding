import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "react-tooltip/dist/react-tooltip.css";
import "./index.css";
import { PageLoader } from "./Components/HelperComponent/PageLoader/PageLoader";

import {
  Accordion,
  AutoSuggestion,
  BarChart,
  Calculator,
  CountDownTimer,
  EmiCalculator,
  FilterItems,
  ImageCarousel,
  InfiniteScroll,
  LoginOtpInput,
  ModalOverlay,
  MultiStepForm,
  ProgressBar,
  RatingStar,
  ShoppingList,
  UndoableCounter,
  NotFound,
} from "./Routes/routes.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<PageLoader />}>
        <App />
      </Suspense>
    ),
  },
  {
    path: "accordion",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Accordion />
      </Suspense>
    ),
  },
  {
    path: "auto-suggestion",
    element: (
      <Suspense fallback={<PageLoader />}>
        <AutoSuggestion />
      </Suspense>
    ),
  },
  {
    path: "bar-chart",
    element: (
      <Suspense fallback={<PageLoader />}>
        <BarChart />
      </Suspense>
    ),
  },
  {
    path: "calculator",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Calculator />
      </Suspense>
    ),
  },
  {
    path: "count-down-timer",
    element: (
      <Suspense fallback={<PageLoader />}>
        <CountDownTimer />
      </Suspense>
    ),
  },
  {
    path: "emi-calculator",
    element: (
      <Suspense fallback={<PageLoader />}>
        <EmiCalculator />
      </Suspense>
    ),
  },
  {
    path: "filter-items",
    element: (
      <Suspense fallback={<PageLoader />}>
        <FilterItems />
      </Suspense>
    ),
  },
  {
    path: "image-carousel",
    element: (
      <Suspense fallback={<PageLoader />}>
        <ImageCarousel />
      </Suspense>
    ),
  },
  {
    path: "infinite-scroll",
    element: (
      <Suspense fallback={<PageLoader />}>
        <InfiniteScroll />
      </Suspense>
    ),
  },
  {
    path: "login-otp",
    element: (
      <Suspense fallback={<PageLoader />}>
        <LoginOtpInput />
      </Suspense>
    ),
  },
  {
    path: "modal-overlay",
    element: (
      <Suspense fallback={<PageLoader />}>
        <ModalOverlay />
      </Suspense>
    ),
  },
  {
    path: "multi-step-form",
    element: (
      <Suspense fallback={<PageLoader />}>
        <MultiStepForm />
      </Suspense>
    ),
  },
  {
    path: "progress-bar",
    element: (
      <Suspense fallback={<PageLoader />}>
        <ProgressBar />
      </Suspense>
    ),
  },
  {
    path: "rating-star",
    element: (
      <Suspense fallback={<PageLoader />}>
        <RatingStar />
      </Suspense>
    ),
  },
  {
    path: "shopping-list",
    element: (
      <Suspense fallback={<PageLoader />}>
        <ShoppingList />
      </Suspense>
    ),
  },
  {
    path: "undoable-counter",
    element: (
      <Suspense fallback={<PageLoader />}>
        <UndoableCounter />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<PageLoader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
