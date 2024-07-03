import React from "react";
import { Fragment, useState, useEffect } from "react";
import { items } from "./items";
import styles from "./FilterItems.module.css";
import HeadingComponent from "../HelperComponent/HeadingComponent/HeadingComponent";

const FilterItems = () => {
  const filters = ["Bags", "Watches", "Sports", "Sunglasses"];
  const [filteredData, setFilteredData] = useState(items);
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterClick = (e) => {
    const category = e.target.id;
    console.log(category);
    if (activeFilters.includes(category)) {
      //toggle false
      const filters = activeFilters.filter((el) => el !== category);
      setActiveFilters(filters);
    } else {
      //
      setActiveFilters([...activeFilters, category]); //toggle true
    }
  };

  const filterProducts = () => {
    if (activeFilters.length) {
      const tempItems = items.filter((item) =>
        activeFilters.includes(item.category)
      );
      setFilteredData(tempItems);
    } else {
      setFilteredData(items);
    }
  };

  useEffect(() => {
    filterProducts();
  }, [activeFilters]);

  return (
    <Fragment>
      <HeadingComponent heading="Filter Items" />
      <div className={styles.App}>
        <div className={styles.filters}>
          {filters.map((item, idx) => (
            <button
              className={activeFilters.includes(item) ? styles.selected : ""}
              key={idx}
              id={item}
              onClick={handleFilterClick}
            >
              {item}
            </button>
          ))}
        </div>

        <div className={styles.product_list}>
          {filteredData.map((item, idx) => (
            <div className={styles.item} key={idx}>
              <p>{item.name}</p>
              <p className={styles.category}>{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default FilterItems;
