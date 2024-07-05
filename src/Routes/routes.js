import { lazy } from "react";

const Accordion = lazy(() => import("../Components/Accordion/Accordion.jsx"));
const AutoSuggestion = lazy(() =>
  import("../Components/AutoSuggestion/AutoSuggestion.jsx")
);
const BarChart = lazy(() => import("../Components/BarChart/BarChart.jsx"));
const Calculator = lazy(() =>
  import("../Components/Calculator/Calculator.jsx")
);
const CountDownTimer = lazy(() =>
  import("../Components/CountDownTimer/CountDownTimer.jsx")
);
const EmiCalculator = lazy(() =>
  import("../Components/EmiCalculator/EmiCalculator.jsx")
);
const FilterItems = lazy(() =>
  import("../Components/FilterItems/FilterItems.jsx")
);
const ImageCarousel = lazy(() =>
  import("../Components/ImageCarousel/ImageCarousel.jsx")
);
const InfiniteScroll = lazy(() =>
  import("../Components/InfiniteScroll/InfiniteScroll.jsx")
);
const LoginOtpInput = lazy(() =>
  import("../Components/LoginOtpInput/LoginOtpInput.jsx")
);
const ModalOverlay = lazy(() =>
  import("../Components/ModalOverlay/ModalOverlay.jsx")
);
const MultiStepForm = lazy(() =>
  import("../Components/MultiStepForm/MultiStepForm.jsx")
);
const ProgressBar = lazy(() =>
  import("../Components/ProgressBar/ProgressBar.jsx")
);
const RatingStar = lazy(() =>
  import("../Components/RatingStar/RatingStar.jsx")
);
const ShoppingList = lazy(() =>
  import("../Components/ShoppingList/ShoppingList.jsx")
);
const UndoableCounter = lazy(() =>
  import("../Components/UndoableCounter/UndoableCounter.jsx")
);
const NotFound = lazy(() =>
  import("../Components/HelperComponent/NotFound/NotFound.jsx")
);

export {
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
};
