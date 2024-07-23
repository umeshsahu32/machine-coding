import React, { useState } from "react";
import styles from "./Section06.module.css";

const categories = [
  {
    name: "Category 1",
    subcategories: ["Sub 1.1", "Sub 1.2", "Sub 1.3", "Sub 1.4", "Sub 1.5"],
  },
  {
    name: "Category 2",
    subcategories: ["Sub 2.1", "Sub 2.2", "Sub 2.3", "Sub 2.4", "Sub 2.5"],
  },
  {
    name: "Category 3",
    subcategories: ["Sub 3.1", "Sub 3.2", "Sub 3.3", "Sub 3.4", "Sub 3.5"],
  },
  {
    name: "Category 4",
    subcategories: ["Sub 4.1", "Sub 4.2", "Sub 4.3", "Sub 4.4", "Sub 4.5"],
  },
  {
    name: "Category 5",
    subcategories: ["Sub 5.1", "Sub 5.2", "Sub 5.3", "Sub 5.4", "Sub 5.5"],
  },
  {
    name: "Category 6",
    subcategories: ["Sub 6.1", "Sub 6.2", "Sub 6.3", "Sub 6.4", "Sub 6.5"],
  },
  {
    name: "Category 7",
    subcategories: ["Sub 7.1", "Sub 7.2", "Sub 7.3", "Sub 7.4", "Sub 7.5"],
  },

  {
    name: "Category 8",
    subcategories: ["Sub 8.1", "Sub 8.2", "Sub 8.3", "Sub 8.4", "Sub 8.5"],
  },
  {
    name: "Category 9",
    subcategories: ["Sub 9.1", "Sub 9.2", "Sub 9.3", "Sub 9.4", "Sub 9.5"],
  },
  {
    name: "Category 10",
    subcategories: ["Sub 10.1", "Sub 10.2", "Sub 10.3", "Sub 10.4", "Sub 10.5"],
  },
  {
    name: "Category 11",
    subcategories: ["Sub 11.1", "Sub 11.2", "Sub 11.3", "Sub 11.4", "Sub 11.5"],
  },
  {
    name: "Category 12",
    subcategories: ["Sub 12.1", "Sub 12.2", "Sub 12.3", "Sub 12.4", "Sub 12.5"],
  },
  {
    name: "Category 13",
    subcategories: ["Sub 13.1", "Sub 13.2", "Sub 13.3", "Sub 13.4", "Sub 13.5"],
  },
  {
    name: "Category 14",
    subcategories: ["Sub 14.1", "Sub 14.2", "Sub 14.3", "Sub 14.4", "Sub 14.5"],
  },
  {
    name: "Category 15",
    subcategories: ["Sub 15.1", "Sub 15.2", "Sub 15.3", "Sub 15.4", "Sub 15.5"],
  },

  {
    name: "Category 16",
    subcategories: ["Sub 16.1", "Sub 16.2", "Sub 16.3", "Sub 16.4", "Sub 16.5"],
  },
];

const Section06 = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className={styles.container}>
      {categories.map((category, index) => (
        <div
          key={index}
          className={styles.category}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <button className={styles.categoryButton}>{category.name}</button>
          <div
            className={`${styles.subcategories} ${
              hoverIndex === index ? styles.show : ""
            } ${index < 8 ? styles.top : styles.bottom}`}
          >
            {category.subcategories.map((sub, subIndex) => (
              <div
                key={subIndex}
                className={styles.subcategory}
                style={{ animationDelay: `${subIndex * 0.1}s` }}
              >
                {sub}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section06;
