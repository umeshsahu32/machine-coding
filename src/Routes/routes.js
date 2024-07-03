import { lazy } from "react";

const ImageCarousel = lazy(() =>
  import("../Components/ImageCarousel/ImageCarousel.jsx")
);

const BarChart = lazy(() => import("../Components/BarChart/BarChart.jsx"));

const InfiniteScroll = lazy(() =>
  import("../Components/InfiniteScroll/InfiniteScroll.jsx")
);

const FilterItems = lazy(() =>
  import("../Components/FilterItems/FilterItems.jsx")
);

const RatingStar = lazy(() =>
  import("../Components/RatingStar/RatingStar.jsx")
);

const MultiStepForm = lazy(() =>
  import("../Components/MultiStepForm/MultiStepForm.jsx")
);

const CountDownTimer = lazy(() =>
  import("../Components/CountDownTimer/CountDownTimer.jsx")
);

const Accordion = lazy(() => import("../Components/Accordion/Accordion.jsx"));

const NotFound = lazy(() =>
  import("../Components/HelperComponent/NotFound/NotFound.jsx")
);

export {
  ImageCarousel,
  BarChart,
  InfiniteScroll,
  FilterItems,
  RatingStar,
  MultiStepForm,
  CountDownTimer,
  Accordion,
  NotFound,
};
