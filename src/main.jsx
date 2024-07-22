import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "react-tooltip/dist/react-tooltip.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { PageLoader } from "./Components/HelperComponent/PageLoader/PageLoader";
import { store } from "./store";
import { Provider } from "react-redux";

import {
  Accordion,
  AutoSuggestion,
  BarChart,
  Breadcrumbs,
  Calculator,
  CardCarousel,
  CountDownTimer,
  CryptoConverter,
  CurrencyConverter,
  CustomTab,
  DragAndDrop,
  EmiCalculator,
  EmployeeDatabase,
  FilterItems,
  FormStepper,
  FormValidation,
  GridLights,
  ImageCarousel,
  InfiniteScroll,
  JobBoard,
  LikeButton,
  LoginOtpInput,
  MemoryGame,
  ModalOverlay,
  MultiSelectPills,
  MultiStepForm,
  Pagination,
  PasswordGenerator,
  ProgressBar,
  Quiz,
  RatingStar,
  SelectableGrid,
  ShoppingCart,
  ShoppingList,
  TicTacToe,
  Timeline,
  TransferList,
  TreeViewFolder,
  UndoableCounter,
  NotFound,
  Services,
  Features,
  Blogs,
  Teams,
  CaseCard,
  ContactUs,
  PillCarousel,
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
    path: "breadcrumbs",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Breadcrumbs />
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
    path: "card-carousel",
    element: (
      <Suspense fallback={<PageLoader />}>
        <CardCarousel />
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
    path: "crypto-converter",
    element: (
      <Suspense fallback={<PageLoader />}>
        <CryptoConverter />
      </Suspense>
    ),
  },
  {
    path: "currency-converter",
    element: (
      <Suspense fallback={<PageLoader />}>
        <CurrencyConverter />
      </Suspense>
    ),
  },
  {
    path: "custom-tab",
    element: (
      <Suspense fallback={<PageLoader />}>
        <CustomTab />
      </Suspense>
    ),
  },
  {
    path: "drag-and-drop",
    element: (
      <Suspense fallback={<PageLoader />}>
        <DragAndDrop />
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
    path: "employee-database",
    element: (
      <Suspense fallback={<PageLoader />}>
        <EmployeeDatabase />
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
    path: "form-stepper",
    element: (
      <Suspense fallback={<PageLoader />}>
        <FormStepper />
      </Suspense>
    ),
  },
  {
    path: "form-validation",
    element: (
      <Suspense fallback={<PageLoader />}>
        <FormValidation />
      </Suspense>
    ),
  },
  {
    path: "grid-lights",
    element: (
      <Suspense fallback={<PageLoader />}>
        <GridLights />
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
    path: "job-board",
    element: (
      <Suspense fallback={<PageLoader />}>
        <JobBoard />
      </Suspense>
    ),
  },
  {
    path: "like-button",
    element: (
      <Suspense fallback={<PageLoader />}>
        <LikeButton />
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
    path: "memory-game",
    element: (
      <Suspense fallback={<PageLoader />}>
        <MemoryGame />
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
    path: "multi-select-pills",
    element: (
      <Suspense fallback={<PageLoader />}>
        <MultiSelectPills />
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
    path: "pagination",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Pagination />
      </Suspense>
    ),
  },
  {
    path: "password-generator",
    element: (
      <Suspense fallback={<PageLoader />}>
        <PasswordGenerator />
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
    path: "quiz",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Quiz />
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
    path: "selectable-grid",
    element: (
      <Suspense fallback={<PageLoader />}>
        <SelectableGrid />
      </Suspense>
    ),
  },
  {
    path: "shopping-cart",
    element: (
      <Suspense fallback={<PageLoader />}>
        <ShoppingCart />
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
    path: "tic-tac-toe",
    element: (
      <Suspense fallback={<PageLoader />}>
        <TicTacToe />
      </Suspense>
    ),
  },

  {
    path: "timeline",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Timeline />
      </Suspense>
    ),
  },

  {
    path: "transfer-list",
    element: (
      <Suspense fallback={<PageLoader />}>
        <TransferList />
      </Suspense>
    ),
  },
  {
    path: "tree-view-folder",
    element: (
      <Suspense fallback={<PageLoader />}>
        <TreeViewFolder />
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
    path: "services",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Services />
      </Suspense>
    ),
  },
  {
    path: "features",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Features />
      </Suspense>
    ),
  },
  {
    path: "blogs",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Blogs />
      </Suspense>
    ),
  },
  {
    path: "teams",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Teams />
      </Suspense>
    ),
  },
  {
    path: "case",
    element: (
      <Suspense fallback={<PageLoader />}>
        <CaseCard />
      </Suspense>
    ),
  },
  {
    path: "contact-us",
    element: (
      <Suspense fallback={<PageLoader />}>
        <ContactUs />
      </Suspense>
    ),
  },
  {
    path: "pills",
    element: (
      <Suspense fallback={<PageLoader />}>
        <PillCarousel />
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
