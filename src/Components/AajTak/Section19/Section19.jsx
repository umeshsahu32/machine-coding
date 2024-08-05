import React, { Fragment, useState } from "react";
import image11 from "../../../assets/images/image11.jpg";
import image22 from "../../../assets/images/image22.jpg";
import styles from "./Section19.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import KnowMoreModal from "./KnowMoreModal";

const Section19 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDataIndex, setOpenDataIndex] = useState(0);

  const closeModal = () => setIsModalOpen(false);

  const data = [
    {
      id: 0,
      primary_heading: "AOB Q-Lead Predictive Lead Scoring",
      secondary_heading:
        "Why Lead generated via Predictive Lead Score improves Sales",
      image: image11,
      desc: "Our Predictive lead scoring uses data, AI, and machine learning to evaluate and prioritize leads based on their likelihood to convert",
      primary_list: [
        "Our Predictive lead scoring uses data, AI, and machine learning to evaluate and prioritize leads based on their likelihood to convert.",
        "It helps businesses focus their sales efforts on leads that are most likely to become customers, thereby improving conversion rates and sales efficiency.",
      ],
      secondary_list: [
        "Increased Conversion Rates - Clients have seen up to a 30% increase in conversion rates by focusing on high-scoring leads",
        "Optimized Marketing Spend - Reduced cost per acquisition by targeting the right leads with personalized marketing efforts.",
        "Enhanced Sales Productivity - Sales teams can prioritize their efforts on leads that are more likely to convert, resulting in higher efficiency and productivity",
      ],
    },
    {
      id: 1,
      primary_heading: "AOB Q-Lead Harmonic Analysis",
      secondary_heading:
        "Why Harmonic Analysis on Qualified Lead improves Sales",
      image: image22,
      desc: "Enhanced Customer Insights: Provides deeper insights into customer sentiments by analyzing not just what customers say but how they say it.",
      primary_list: [
        "Enhanced Customer Insights: Provides deeper insights into customer sentiments by analyzing not just what customers say but how they say it.",
        "Increased Conversion Rates: Prioritizes leads based on engagement and interest, helping to focus on those most likely to convert.",
      ],
      secondary_list: [
        "The technology helps identify buying triggers and understand the overall disposition of leads.",
        "AI tools generate dynamic scripts based on lead source, and conversations are analysed for quality assurance, resulting in audio transcripts and harmonic analysis files.",
        "Harmonic analysis is used to monitor and evaluate conversations to ensure quality and compliance. This ensure the lead is truly qualified on all parameters.",
      ],
    },
  ];

  const openModalButtonHandler = (e, id) => {
    e.preventDefault();
    setOpenDataIndex(id);
    setIsModalOpen(true);
  };

  return (
    <Fragment>
      <section className={styles.section_container}>
        {data.map((item) => {
          return (
            <div className={styles.section_card} key={item.id}>
              <img src={item.image} alt="Image" />
              <div className={styles.card_info}>
                <h5>{item.heading}</h5>
                <p>{item.desc}</p>
                <button
                  className={styles.know_more_button}
                  onClick={(e) => openModalButtonHandler(e, item.id)}
                >
                  <span>Know More</span>
                  <span>
                    <FaLongArrowAltRight />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <KnowMoreModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={data[openDataIndex]}
      />
    </Fragment>
  );
};

export default Section19;
