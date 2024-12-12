import React, { useCallback, useState } from "react";

const SelectableGrid = () => {
  const [selectedBox, setSelectedBox] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const GRID_COLUMN = 10;
  const GRID_ROW = 10;

  const mouseUpHandler = () => {
    setIsMouseDown(false);
  };

  const mouseDownHandler = (boxNumber) => {
    setIsMouseDown(true);
    setSelectedBox([boxNumber]);
  };

  const mouseEnterHandler = useCallback(
    (boxNumber) => {
      if (isMouseDown) {
        const startBox = selectedBox[0];
        const endBox = boxNumber;

        const startRow = Math.floor((startBox - 1) / GRID_COLUMN);
        const startCol = (startBox - 1) % GRID_COLUMN;

        const endRow = Math.floor((endBox - 1) / GRID_COLUMN);
        const endCol = (endBox - 1) % GRID_COLUMN;

        const minRow = Math.min(startRow, endRow);
        const maxRow = Math.max(startRow, endRow);

        const minCol = Math.min(startCol, endCol);
        const maxCol = Math.max(startCol, endCol);

        let selected = [];
        for (let i = minRow; i <= maxRow; i++) {
          for (let j = minCol; j <= maxCol; j++) {
            selected.push(i * GRID_COLUMN + j + 1);
          }
        }

        setSelectedBox(selected);
      }
    },
    [isMouseDown]
  );

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col gap-10 items-center p-10">
      <h3 className="text-4xl text-slate-800 font-bold">Selectable Grid</h3>
      <div
        className="grid gap-2 select-none"
        onMouseUp={mouseUpHandler}
        style={{
          gridTemplateColumns: `repeat(${GRID_COLUMN}, 35px)`,
          gridTemplateRows: `repeat(${GRID_ROW}, 35px)`,
        }}
      >
        {[...Array(GRID_COLUMN * GRID_ROW).keys()].map((_, i) => {
          return (
            <div
              onMouseDown={() => mouseDownHandler(i + 1)}
              onMouseEnter={() => mouseEnterHandler(i + 1)}
              className={`w-10 h-10 flex justify-center items-center border border-slate-600 ${
                selectedBox.includes(i + 1) ? "bg-green-400" : ""
              }`}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectableGrid;
