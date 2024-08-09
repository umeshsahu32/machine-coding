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
import Section01 from "./Components/AajTak/Section01/Section01.jsx";
import Section02 from "./Components/AajTak/Section02/Section02.jsx";
import { NotificationProvider } from "./Components/NotificationToaster/NotificationContext.jsx";

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
import Section03 from "./Components/AajTak/Section03/Section03.jsx";
import Section04 from "./Components/AajTak/Section04/Section04.jsx";
import Section05 from "./Components/AajTak/Section05/Section05.jsx";
import Section06 from "./Components/AajTak/Section06/Section06.jsx";
import Section07 from "./Components/AajTak/Section07/Section07.jsx";
import Section08 from "./Components/AajTak/Section08/Section08.jsx";
import Section09 from "./Components/AajTak/Section09/Section09.jsx";
import Section10 from "./Components/AajTak/Section10/Section10.jsx";
import Section11 from "./Components/AajTak/Section11/Section11.jsx";
import Section12 from "./Components/AajTak/Section12/Section12.jsx";
import Section13 from "./Components/AajTak/Section13/Section13.jsx";
import Section14 from "./Components/AajTak/Section14/Section14.jsx";
import Section15 from "./Components/AajTak/Section15/Section15.jsx";
import Section16 from "./Components/AajTak/Section16/Section16.jsx";
import Section17 from "./Components/AajTak/Section17/Section17.jsx";
import Section18 from "./Components/AajTak/Section18/Section18.jsx";
import Section19 from "./Components/AajTak/Section19/Section19.jsx";
import Section20 from "./Components/AajTak/Section20/Section20.jsx";
import Section21 from "./Components/AajTak/Section21/Section21.jsx";
import Section22 from "./Components/AajTak/Section22/Section22.jsx";
import Section23 from "./Components/AajTak/Section23/Section23.jsx";
import Section24 from "./Components/AajTak/Section24/Section24.jsx";

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
    path: "section-01",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section01 />
      </Suspense>
    ),
  },

  {
    path: "section-02",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section02 />
      </Suspense>
    ),
  },

  {
    path: "section-03",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section03 />
      </Suspense>
    ),
  },

  {
    path: "section-04",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section04 />
      </Suspense>
    ),
  },

  {
    path: "section-05",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section05 />
      </Suspense>
    ),
  },

  {
    path: "section-06",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section06 />
      </Suspense>
    ),
  },

  {
    path: "section-07",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section07 />
      </Suspense>
    ),
  },

  {
    path: "section-08",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section08 />
      </Suspense>
    ),
  },
  {
    path: "section-09",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section09 />
      </Suspense>
    ),
  },
  {
    path: "section-10",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section10 />
      </Suspense>
    ),
  },
  {
    path: "section-11",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section11 />
      </Suspense>
    ),
  },
  {
    path: "section-12",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section12 />
      </Suspense>
    ),
  },
  {
    path: "section-13",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section13 />
      </Suspense>
    ),
  },
  {
    path: "section-14",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section14 />
      </Suspense>
    ),
  },
  {
    path: "section-15",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section15 />
      </Suspense>
    ),
  },
  {
    path: "section-16",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section16 />
      </Suspense>
    ),
  },
  {
    path: "section-17",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section17 />
      </Suspense>
    ),
  },
  {
    path: "section-18",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section18 />
      </Suspense>
    ),
  },
  {
    path: "section-19",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section19 />
      </Suspense>
    ),
  },
  {
    path: "section-20",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section20 />
      </Suspense>
    ),
  },
  {
    path: "section-21",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section21 />
      </Suspense>
    ),
  },
  {
    path: "section-22",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section22 />
      </Suspense>
    ),
  },

  {
    path: "section-23",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section23 />
      </Suspense>
    ),
  },
  {
    path: "section-24",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Section24 />
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
    <NotificationProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </NotificationProvider>
  </React.StrictMode>
);
