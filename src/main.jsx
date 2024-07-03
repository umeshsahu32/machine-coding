import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "react-tooltip/dist/react-tooltip.css";
import "./index.css";
import PageLoader from "./Components/HelperComponent/PageLoader/PageLoader";

import {
  ImageCarousel,
  BarChart,
  InfiniteScroll,
  FilterItems,
  RatingStar,
  MultiStepForm,
  CountDownTimer,
  NotFound,
  Accordion,
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
    path: "image-carousel",
    element: (
      <Suspense fallback={<PageLoader />}>
        <ImageCarousel />
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
    path: "infinite-scroll",
    element: (
      <Suspense fallback={<PageLoader />}>
        <InfiniteScroll />
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
    path: "rating-star",
    element: (
      <Suspense fallback={<PageLoader />}>
        <RatingStar />
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
    path: "count-down-timer",
    element: (
      <Suspense fallback={<PageLoader />}>
        <CountDownTimer />
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
