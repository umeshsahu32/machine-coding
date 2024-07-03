import { Fragment } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  // @ JSX START
  return (
    <Fragment>
      <ul>
        <li>
          <Link to="accordion">👉🏽&nbsp;&nbsp;Accordion</Link>
        </li>
        <li>
          <Link to="image-carousel">👉🏽&nbsp;&nbsp;Image Carousel</Link>
        </li>
        <li>
          <Link to="bar-chart">👉🏽&nbsp;&nbsp;Bar Chart</Link>
        </li>
        <li>
          <Link to="infinite-scroll">👉🏽&nbsp;&nbsp;Infinite Scroll</Link>
        </li>
        <li>
          <Link to="filter-items">👉🏽&nbsp;&nbsp;Filter Items</Link>
        </li>
        <li>
          <Link to="rating-star">👉🏽&nbsp;&nbsp;Rating Star</Link>
        </li>
        <li>
          <Link to="multi-step-form">👉🏽&nbsp;&nbsp;Multi Step Form</Link>
        </li>
        <li>
          <Link to="count-down-timer">👉🏽&nbsp;&nbsp;Count Down Timer</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default App;
