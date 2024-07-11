import React, { Fragment, useState, useEffect } from "react";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";
import styles from "./SelectableGrid.module.css";

const SelectableGrid = () => {
  const [twoDMatrix, setTwoDMatrix] = useState([]); // 100cells
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);

  const prepareTwoDMatrix = () => {
    const matrix = [];
    for (let i = 0; i <= 9; i++) {
      //rows
      for (let j = 0; j <= 9; j++) {
        //cols
        const obj = {
          pos: [i, j], // [row,col]
          isColor: false,
        };
        matrix.push(obj);
      }
    }
    setTwoDMatrix(matrix);
  };

  useEffect(() => {
    prepareTwoDMatrix();
  }, []);

  const handleOnDrag = (e, pos) => {
    setStart(pos);
    prepareTwoDMatrix();
  };

  const handleOnDragOver = (e, pos) => {
    setEnd(pos);
  };

  const fillColor = (startPos, endPos) => {
    let [startRow, startCol] = startPos;
    let [endRow, endCol] = endPos;

    let selectedGrid = [];
    for (let i = startRow; i <= endRow; i++) {
      for (let j = startCol; j <= endCol; j++) {
        selectedGrid.push([i, j].join(""));
      }
    }

    let copyMat = [...twoDMatrix];

    copyMat = copyMat.map((item) => {
      const { pos } = item;
      const stringPos = pos.join("");
      if (selectedGrid.includes(stringPos)) {
        item.isColor = true;
      }
      return item;
    });

    setTwoDMatrix(copyMat);
  };

  useEffect(() => {
    if (start.length > 1 && end.length > 1) {
      fillColor(start, end);
    }
  }, [start, end]);

  return (
    <Fragment>
      <HeadingComponent heading="Selectable Grid" />
      <div className={styles.parent}>
        <div className={styles.grid}>
          <div className={styles.board}>
            {twoDMatrix?.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`${styles.cell} ${
                    item.isColor ? styles.selected_cell : ""
                  }`}
                  draggable
                  onDragOver={(e) => handleOnDragOver(e, item.pos)}
                  onDrag={(e) => handleOnDrag(e, item.pos)}
                >
                  {item.pos}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SelectableGrid;
