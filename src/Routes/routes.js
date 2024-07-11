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
const CryptoConverter = lazy(() =>
  import("../Components/CryptoConverter/CryptoConverter.jsx")
);
const CustomTab = lazy(() => import("../Components/CustomTab/CustomTab.jsx"));
const DragAndDrop = lazy(() =>
  import("../Components/DragAndDrop/DragAndDrop.jsx")
);
const EmiCalculator = lazy(() =>
  import("../Components/EmiCalculator/EmiCalculator.jsx")
);
const FilterItems = lazy(() =>
  import("../Components/FilterItems/FilterItems.jsx")
);
const FormValidation = lazy(() =>
  import("../Components/FormValidation/FormValidation.jsx")
);
const GridLights = lazy(() =>
  import("../Components/GridLights/GridLights.jsx")
);
const ImageCarousel = lazy(() =>
  import("../Components/ImageCarousel/ImageCarousel.jsx")
);
const InfiniteScroll = lazy(() =>
  import("../Components/InfiniteScroll/InfiniteScroll.jsx")
);
const JobBoard = lazy(() => import("../Components/JobBoard/JobBoard.jsx"));
const LikeButton = lazy(() =>
  import("../Components/LikeButtons/LikeButton.jsx")
);
const LoginOtpInput = lazy(() =>
  import("../Components/LoginOtpInput/LoginOtpInput.jsx")
);
const MemoryGame = lazy(() =>
  import("../Components/MemoryGame/MemoryGame.jsx")
);
const ModalOverlay = lazy(() =>
  import("../Components/ModalOverlay/ModalOverlay.jsx")
);
const MultiStepForm = lazy(() =>
  import("../Components/MultiStepForm/MultiStepForm.jsx")
);
const PasswordGenerator = lazy(() =>
  import("../Components/PasswordGenerator/PasswordGenerator.jsx")
);
const ProgressBar = lazy(() =>
  import("../Components/ProgressBar/ProgressBar.jsx")
);
const RatingStar = lazy(() =>
  import("../Components/RatingStar/RatingStar.jsx")
);
const SelectableGrid = lazy(() =>
  import("../Components/SelectableGrid/SelectableGrid.jsx")
);
const ShoppingList = lazy(() =>
  import("../Components/ShoppingList/ShoppingList.jsx")
);
const TicTacToe = lazy(() => import("../Components/TicTacToe/TicTacToe.jsx"));
const TransferList = lazy(() =>
  import("../Components/TransferList/TransferList.jsx")
);
const TreeViewFolder = lazy(() =>
  import("../Components/TreeViewFolder/TreeViewFolder.jsx")
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
  CryptoConverter,
  CustomTab,
  DragAndDrop,
  EmiCalculator,
  FilterItems,
  FormValidation,
  GridLights,
  ImageCarousel,
  InfiniteScroll,
  JobBoard,
  LikeButton,
  LoginOtpInput,
  MemoryGame,
  ModalOverlay,
  MultiStepForm,
  PasswordGenerator,
  ProgressBar,
  RatingStar,
  SelectableGrid,
  ShoppingList,
  TicTacToe,
  TransferList,
  TreeViewFolder,
  UndoableCounter,
  NotFound,
};
