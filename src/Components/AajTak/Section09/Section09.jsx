import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import PillCarousel from "./PillCarousel";
import styles from "./Section09.module.css";
import image1 from "../../../assets/image-1.webp";
import image2 from "../../../assets/image-2.webp";
import image3 from "../../../assets/image-3.webp";
import image4 from "../../../assets/image-4.webp";
import image5 from "../../../assets/image-5.webp";
import image6 from "../../../assets/image-6.webp";
import SuccessCard from "./SuccessCard";

const successData = [
  {
    id: 1,
    section_id: 1,
    section_name: "Category Name 1",
    image: image1,
    challenge:
      "An online retailer, Paytm Mall, needed to boost sales during the holiday season by reaching potential customers interested in their products.",
    solution:
      "We conducted targeted email and social media campaigns, delivering highly qualified leads to their sales team.",
    result:
      "The retailer saw a 50% increase in holiday sales and significantly expanded their customer base.",
    percentage: "47%",
    description: "Traffic improvement",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #59d337 0%, #111827 60%)",
  },
  {
    id: 2,
    section_id: 1,
    section_name: "Category Name 1",
    image: image2,
    challenge:
      "An online retailer, Paytm Mall, needed to boost sales during the holiday season by reaching potential customers interested in their products.",
    solution:
      "We conducted targeted email and social media campaigns, delivering highly qualified leads to their sales team.",
    result:
      "The retailer saw a 50% increase in holiday sales and significantly expanded their customer base.",
    percentage: "47%",
    description: "Traffic improvement",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #E3A5C7 0%, #111827 60%)",
  },
  {
    id: 3,
    section_id: 2,
    section_name: "Category Name 2",
    image: image3,
    challenge:
      "An online retailer, Paytm Mall, needed to boost sales during the holiday season by reaching potential customers interested in their products.",
    solution:
      "We conducted targeted email and social media campaigns, delivering highly qualified leads to their sales team.",
    result:
      "The retailer saw a 50% increase in holiday sales and significantly expanded their customer base.",
    percentage: "47%",
    description: "Traffic improvement",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #2E236C 0%, #111827 60%)",
  },
  {
    id: 4,
    section_id: 2,
    section_name: "Category Name 2",
    image: image4,
    challenge:
      "An online retailer, Paytm Mall, needed to boost sales during the holiday season by reaching potential customers interested in their products.",
    solution:
      "We conducted targeted email and social media campaigns, delivering highly qualified leads to their sales team.",
    result:
      "The retailer saw a 50% increase in holiday sales and significantly expanded their customer base.",
    percentage: "47%",
    description: "Traffic improvement",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #9B86BD 0%, #111827 60%)",
  },
  {
    id: 5,
    section_id: 3,
    section_name: "Category Name 3",
    image: image5,
    challenge:
      "An online retailer, Paytm Mall, needed to boost sales during the holiday season by reaching potential customers interested in their products.",
    solution:
      "We conducted targeted email and social media campaigns, delivering highly qualified leads to their sales team.",
    result:
      "The retailer saw a 50% increase in holiday sales and significantly expanded their customer base.",
    percentage: "47%",
    description: "Traffic improvement",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #088395 0%, #111827 60%)",
  },
  {
    id: 6,
    section_id: 4,
    section_name: "Category Name 4",
    image: image6,
    challenge:
      "An online retailer, Paytm Mall, needed to boost sales during the holiday season by reaching potential customers interested in their products.",
    solution:
      "We conducted targeted email and social media campaigns, delivering highly qualified leads to their sales team.",
    result:
      "The retailer saw a 50% increase in holiday sales and significantly expanded their customer base.",
    percentage: "47%",
    description: "Traffic improvement",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #3C5B6F 0%, #111827 60%)",
  },
  {
    id: 7,
    section_id: 4,
    section_name: "Category Name 4",
    image: image1,
    challenge:
      "An online retailer, Paytm Mall, needed to boost sales during the holiday season by reaching potential customers interested in their products.",
    solution:
      "We conducted targeted email and social media campaigns, delivering highly qualified leads to their sales team.",
    result:
      "The retailer saw a 50% increase in holiday sales and significantly expanded their customer base.",
    percentage: "47%",
    description: "Traffic improvement",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #59d337 0%, #111827 60%)",
  },
  {
    id: 8,
    section_id: 4,
    section_name: "Category Name 4",
    image: image2,
    challenge:
      "An online retailer, Paytm Mall, needed to boost sales during the holiday season by reaching potential customers interested in their products.",
    solution:
      "We conducted targeted email and social media campaigns, delivering highly qualified leads to their sales team.",
    result:
      "The retailer saw a 50% increase in holiday sales and significantly expanded their customer base.",
    percentage: "47%",
    description: "Traffic improvement",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #E3A5C7 0%, #111827 60%)",
  },
  {
    id: 9,
    section_id: 5,
    section_name: "Category Name 5",
    image: image3,
    challenge:
      "An online retailer, Paytm Mall, needed to boost sales during the holiday season by reaching potential customers interested in their products.",
    solution:
      "We conducted targeted email and social media campaigns, delivering highly qualified leads to their sales team.",
    result:
      "The retailer saw a 50% increase in holiday sales and significantly expanded their customer base.",
    percentage: "47%",
    description: "Traffic improvement",
    caseStudy: "See Case Study",
    gradient: "linear-gradient(to bottom, #2E236C 0%, #111827 60%)",
  },
];

const Section09 = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeData, setActiveData] = useState([]);

  const fnGetActiveData = () => {
    const res = successData.filter((item) => item.section_id === activeTab);
    setActiveData(res);
  };

  useEffect(() => {
    fnGetActiveData();
  }, [activeTab]);

  const pillClickHandler = (id) => {
    setActiveTab(id);
  };

  return (
    <Fragment>
      <div className={styles.sectionContainer}>
        <PillCarousel
          categories={successData}
          onClick={(id) => pillClickHandler(id)}
          active={activeTab}
        />
        <div>
          <SuccessCard cardData={activeData} />
        </div>
      </div>
    </Fragment>
  );
};

export default Section09;
