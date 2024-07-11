import { Fragment } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  // @ JSX START
  return (
    <Fragment>
      <ul className="list_items">
        <li>
          <Link to="accordion">👉🏽&nbsp;&nbsp;Accordion</Link>
        </li>
        <li>
          <Link to="auto-suggestion">👉🏽&nbsp;&nbsp;Auto Suggestion</Link>
        </li>
        <li>
          <Link to="bar-chart">👉🏽&nbsp;&nbsp;Bar Chart</Link>
        </li>
        <li>
          <Link to="calculator">👉🏽&nbsp;&nbsp;Calculator</Link>
        </li>
        <li>
          <Link to="count-down-timer">👉🏽&nbsp;&nbsp;Count Down Timer</Link>
        </li>
        <li>
          <Link to="crypto-converter">👉🏽&nbsp;&nbsp;Crypto Converter</Link>
        </li>
        <li>
          <Link to="custom-tab">👉🏽&nbsp;&nbsp;Custom Tab</Link>
        </li>
        <li>
          <Link to="drag-and-drop">👉🏽&nbsp;&nbsp;Drag & Drop</Link>
        </li>
        <li>
          <Link to="emi-calculator">👉🏽&nbsp;&nbsp;EMI Calculator</Link>
        </li>
        <li>
          <Link to="filter-items">👉🏽&nbsp;&nbsp;Filter Items</Link>
        </li>
        <li>
          <Link to="form-validation">👉🏽&nbsp;&nbsp;Form Validation</Link>
        </li>
        <li>
          <Link to="grid-lights">👉🏽&nbsp;&nbsp;Grid Lights</Link>
        </li>
        <li>
          <Link to="image-carousel">👉🏽&nbsp;&nbsp;Image Carousel</Link>
        </li>
        <li>
          <Link to="infinite-scroll">👉🏽&nbsp;&nbsp;Infinite Scroll</Link>
        </li>
        <li>
          <Link to="job-board">👉🏽&nbsp;&nbsp;Job Board</Link>
        </li>
        <li>
          <Link to="like-button">👉🏽&nbsp;&nbsp;Like Button</Link>
        </li>
        <li>
          <Link to="login-otp">👉🏽&nbsp;&nbsp;Login OTP</Link>
        </li>
        <li>
          <Link to="memory-game">👉🏽&nbsp;&nbsp;Memory Game</Link>
        </li>
        <li>
          <Link to="modal-overlay">👉🏽&nbsp;&nbsp;Modal Overlay</Link>
        </li>
        <li>
          <Link to="multi-step-form">👉🏽&nbsp;&nbsp;Multi Step Form</Link>
        </li>
        <li>
          <Link to="password-generator">👉🏽&nbsp;&nbsp;Password Generator</Link>
        </li>
        <li>
          <Link to="progress-bar">👉🏽&nbsp;&nbsp;Progress Bar</Link>
        </li>
        <li>
          <Link to="rating-star">👉🏽&nbsp;&nbsp;Rating Star</Link>
        </li>
        <li>
          <Link to="selectable-grid">👉🏽&nbsp;&nbsp;Selectable Grid</Link>
        </li>
        <li>
          <Link to="shopping-list">👉🏽&nbsp;&nbsp;Shopping List</Link>
        </li>
        <li>
          <Link to="tic-tac-toe">👉🏽&nbsp;&nbsp;Tic Tac Toe</Link>
        </li>
        <li>
          <Link to="transfer-list">👉🏽&nbsp;&nbsp;Transfer List</Link>
        </li>
        <li>
          <Link to="tree-view-folder">👉🏽&nbsp;&nbsp;Tree View Folder</Link>
        </li>
        <li>
          <Link to="undoable-counter">👉🏽&nbsp;&nbsp;Undoable Counter</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default App;
