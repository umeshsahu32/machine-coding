import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import PillCarousel from "./PillCarousel";
import styles from "./Section09.module.css";
import { successData } from "./SuccessData";
import CardDesign1 from "./CardDesign1";
import SuccessCard from "./SuccessCard";

const Section09 = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeData, setActiveData] = useState([]);

  const fnGetActiveData = () => {
    const res = successData.filter((item) => item.category_id === activeTab);
    setActiveData(res);
  };

  useEffect(() => {
    fnGetActiveData();
  }, [activeTab]);

  const pillClickHandler = (id) => {
    setActiveTab(id);
  };

  const categories = [
    {
      category_id: 1,
      category: "A2B",
    },
    {
      category_id: 2,
      category: "B2C",
    },
    {
      category_id: 3,
      category: "C2D",
    },
  ];

  return (
    <Fragment>
      <div className={styles.sectionContainer}>
        <PillCarousel
          categories={categories}
          onClick={(id) => pillClickHandler(id)}
          active={activeTab}
        />
        <div>
          <CardDesign1 cardData={activeData} />
        </div>
      </div>
    </Fragment>
  );
};

export default Section09;
