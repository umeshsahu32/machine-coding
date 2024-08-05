import React, { Fragment, useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import Section15 from "../Section15/Section15";
import styles from "./Section16.module.css";
import automobile from "../../../assets/images/automobile.webp";
import corporate from "../../../assets/images/corporate.webp";
import education from "../../../assets/images/education.webp";
import electronics from "../../../assets/images/electronics.webp";
import entertainment from "../../../assets/images/entertainment.webp";
import fashion from "../../../assets/images/fashion.webp";
import food from "../../../assets/images/food.webp";
import healthcare from "../../../assets/images/healthcare.webp";

import logo1 from "../../../assets/logos/download.jpeg";

const Section16 = () => {
  const data = [
    {
      id: 1,
      industry_name: "Ed Tech",
      image: automobile,
      description:
        "We are guided by technology where possibilities know no bounds, autonomous driving takes the wheel, guided by sophisticated IT systems, ushering in a new era of mobility. Connectivity weaves a mesmerising tapestry of smart features, seamlessly blending IT services into the very essence of the vehicles. Discover how we plan to kick off your brand identity to the next level",
      brands: [logo1, logo1, logo1, logo1, logo1, logo1],
    },
    {
      id: 2,
      industry_name: "Finance",
      image: corporate,
      description:
        "The future of corporates is evolving. Agile organisations that embrace technology, sustainability, and diversity will thrive. Remote work and digital collaboration will reshape the workplace, fostering global talent and flexible environments. Customer focus and ethical practices will be key, as corporations adapt to meet evolving expectations, creating a prosperous and purposeful future. To know more about our master plan for the corporate world, talk to us today!",
      brands: [],
    },
    {
      id: 3,
      industry_name: "Fintech",
      image: education,
      description:
        "In a world where knowledge is power, education is undergoing a transformative shift. Technology enables personalised and accessible learning experiences. Online platforms and digital resources offer flexibility and remote education. Adaptive systems cater to individual needs, while virtual and augmented reality enhance engagement. The future of education holds immense potential, empowering learners and nurturing lifelong knowledge in a dynamic world. Discover how we will revolutionise your education brand to a new dimension.",
      brands: [],
    },
    {
      id: 4,
      industry_name: "Loans",
      image: electronics,
      description:
        "A fascinating chapter is on the horizon in the electronics industry. Over the ‘not-so-far-away’ years, customers will take centre stage, with tailored technological innovations and AI-powered companions that shape the way we experience electronics. Imagine a seamless network connecting these devices, granting users newfound control while maintaining trust, efficiency, and clear communication. The IT services at Webandcrafts ensure your brand plays a leading role, adapting to the electronics panorama while leaving a lasting impression.",
      brands: [],
    },
    {
      id: 5,
      industry_name: "Insurance",
      image: entertainment,
      description:
        "Picture the future of entertainment as a journey crafted just for you. In this tale, technology and AI join forces to create personalised adventures. Your experience unfolds seamlessly, like pages in a book that you control. Finding the chapter you love is a piece of cake now. Our commitment is to intensify enjoyment through open experiences for your users. Each moment of entertainment is a unique chapter in your own story, and we're here to make it happen.",
      brands: [],
    },
    {
      id: 6,
      industry_name: "Digital Sales",
      image: fashion,
      description:
        "The fashion industry leads as a trendsetter, evolving through technology's influence on creation, showcase, and consumption. E-commerce and social media platforms grant easy access to trends. Ethical practices driven by sustainability and inclusivity are on the rise. AI and virtual reality redefine the industry. The future brings limitless possibilities as fashion, technology, and personal expression intertwine. Discover how we weave the ultimate strategy to fabricate an unparalleled online experience at WAC.",
      brands: [],
    },
    {
      id: 7,
      industry_name: "E-commerce",
      image: food,
      description:
        "IT innovations have unleashed a culinary revolution. Mobile apps tantalize taste buds, offering seamless food ordering and delivery. AI-powered recommendation engines cater to individual palates. QR code-based menus satiate our hunger for convenience. Data analytics optimize cooking techniques. The future holds tantalizing possibilities with augmented reality and voice assistants, transforming the way we savor, create, and experience food. Uncover the pathway to success for your brand's remarkable journey with WAC.",
      brands: [],
    },
    {
      id: 8,
      industry_name: "App Based Services",
      image: healthcare,
      description:
        "Innovations pulse with transformative potential. Mobile apps enable remote consultations and pulse healthcare management. AI-driven diagnostics inject precision and speed while creating a steady flow of patient data. Data analytics breathe new life into treatment outcomes. The future beats with promise as wearable devices, and precision medicine radiate to redefine the rhythm of healthcare delivery. Experience the blueprint that will catapult your healthcare brand to the next level with WAC.",
      brands: [],
    },
    {
      id: 9,
      industry_name: "Software / Saas",
      image: automobile,
      description:
        "We are guided by technology where possibilities know no bounds, autonomous driving takes the wheel, guided by sophisticated IT systems, ushering in a new era of mobility. Connectivity weaves a mesmerising tapestry of smart features, seamlessly blending IT services into the very essence of the vehicles. Discover how we plan to kick off your brand identity to the next level",
      brands: [logo1, logo1, logo1, logo1, logo1, logo1],
    },
    {
      id: 10,
      industry_name: "Franchise",
      image: corporate,
      description:
        "The future of corporates is evolving. Agile organisations that embrace technology, sustainability, and diversity will thrive. Remote work and digital collaboration will reshape the workplace, fostering global talent and flexible environments. Customer focus and ethical practices will be key, as corporations adapt to meet evolving expectations, creating a prosperous and purposeful future. To know more about our master plan for the corporate world, talk to us today!",
      brands: [],
    },
    {
      id: 11,
      industry_name: "Real Estate",
      image: education,
      description:
        "In a world where knowledge is power, education is undergoing a transformative shift. Technology enables personalised and accessible learning experiences. Online platforms and digital resources offer flexibility and remote education. Adaptive systems cater to individual needs, while virtual and augmented reality enhance engagement. The future of education holds immense potential, empowering learners and nurturing lifelong knowledge in a dynamic world. Discover how we will revolutionise your education brand to a new dimension.",
      brands: [],
    },
    {
      id: 12,
      industry_name: "Timeshare",
      image: electronics,
      description:
        "A fascinating chapter is on the horizon in the electronics industry. Over the ‘not-so-far-away’ years, customers will take centre stage, with tailored technological innovations and AI-powered companions that shape the way we experience electronics. Imagine a seamless network connecting these devices, granting users newfound control while maintaining trust, efficiency, and clear communication. The IT services at Webandcrafts ensure your brand plays a leading role, adapting to the electronics panorama while leaving a lasting impression.",
      brands: [],
    },
    {
      id: 13,
      industry_name: "Travel",
      image: entertainment,
      description:
        "Picture the future of entertainment as a journey crafted just for you. In this tale, technology and AI join forces to create personalised adventures. Your experience unfolds seamlessly, like pages in a book that you control. Finding the chapter you love is a piece of cake now. Our commitment is to intensify enjoyment through open experiences for your users. Each moment of entertainment is a unique chapter in your own story, and we're here to make it happen.",
      brands: [],
    },
    {
      id: 14,
      industry_name: "Education",
      image: fashion,
      description:
        "The fashion industry leads as a trendsetter, evolving through technology's influence on creation, showcase, and consumption. E-commerce and social media platforms grant easy access to trends. Ethical practices driven by sustainability and inclusivity are on the rise. AI and virtual reality redefine the industry. The future brings limitless possibilities as fashion, technology, and personal expression intertwine. Discover how we weave the ultimate strategy to fabricate an unparalleled online experience at WAC.",
      brands: [],
    },
    {
      id: 15,
      industry_name: "Jewelry",
      image: food,
      description:
        "IT innovations have unleashed a culinary revolution. Mobile apps tantalize taste buds, offering seamless food ordering and delivery. AI-powered recommendation engines cater to individual palates. QR code-based menus satiate our hunger for convenience. Data analytics optimize cooking techniques. The future holds tantalizing possibilities with augmented reality and voice assistants, transforming the way we savor, create, and experience food. Uncover the pathway to success for your brand's remarkable journey with WAC.",
      brands: [],
    },
    {
      id: 16,
      industry_name: "Channel Sales",
      image: healthcare,
      description:
        "Innovations pulse with transformative potential. Mobile apps enable remote consultations and pulse healthcare management. AI-driven diagnostics inject precision and speed while creating a steady flow of patient data. Data analytics breathe new life into treatment outcomes. The future beats with promise as wearable devices, and precision medicine radiate to redefine the rhythm of healthcare delivery. Experience the blueprint that will catapult your healthcare brand to the next level with WAC.",
      brands: [],
    },
    {
      id: 17,
      industry_name: "Distribution Network",
      image: automobile,
      description:
        "We are guided by technology where possibilities know no bounds, autonomous driving takes the wheel, guided by sophisticated IT systems, ushering in a new era of mobility. Connectivity weaves a mesmerising tapestry of smart features, seamlessly blending IT services into the very essence of the vehicles. Discover how we plan to kick off your brand identity to the next level",
      brands: [logo1, logo1, logo1, logo1, logo1, logo1],
    },
    {
      id: 18,
      industry_name: "Automobile",
      image: corporate,
      description:
        "The future of corporates is evolving. Agile organisations that embrace technology, sustainability, and diversity will thrive. Remote work and digital collaboration will reshape the workplace, fostering global talent and flexible environments. Customer focus and ethical practices will be key, as corporations adapt to meet evolving expectations, creating a prosperous and purposeful future. To know more about our master plan for the corporate world, talk to us today!",
      brands: [],
    },
    {
      id: 19,
      industry_name: "Hospital",
      image: education,
      description:
        "In a world where knowledge is power, education is undergoing a transformative shift. Technology enables personalised and accessible learning experiences. Online platforms and digital resources offer flexibility and remote education. Adaptive systems cater to individual needs, while virtual and augmented reality enhance engagement. The future of education holds immense potential, empowering learners and nurturing lifelong knowledge in a dynamic world. Discover how we will revolutionise your education brand to a new dimension.",
      brands: [],
    },
    {
      id: 20,
      industry_name: "Leisure",
      image: electronics,
      description:
        "A fascinating chapter is on the horizon in the electronics industry. Over the ‘not-so-far-away’ years, customers will take centre stage, with tailored technological innovations and AI-powered companions that shape the way we experience electronics. Imagine a seamless network connecting these devices, granting users newfound control while maintaining trust, efficiency, and clear communication. The IT services at Webandcrafts ensure your brand plays a leading role, adapting to the electronics panorama while leaving a lasting impression.",
      brands: [],
    },
    {
      id: 21,
      industry_name: "Pharma",
      image: entertainment,
      description:
        "Picture the future of entertainment as a journey crafted just for you. In this tale, technology and AI join forces to create personalised adventures. Your experience unfolds seamlessly, like pages in a book that you control. Finding the chapter you love is a piece of cake now. Our commitment is to intensify enjoyment through open experiences for your users. Each moment of entertainment is a unique chapter in your own story, and we're here to make it happen.",
      brands: [],
    },
    {
      id: 22,
      industry_name: "Restaurant",
      image: fashion,
      description:
        "The fashion industry leads as a trendsetter, evolving through technology's influence on creation, showcase, and consumption. E-commerce and social media platforms grant easy access to trends. Ethical practices driven by sustainability and inclusivity are on the rise. AI and virtual reality redefine the industry. The future brings limitless possibilities as fashion, technology, and personal expression intertwine. Discover how we weave the ultimate strategy to fabricate an unparalleled online experience at WAC.",
      brands: [],
    },
    {
      id: 23,
      industry_name: "Fitness",
      image: food,
      description:
        "IT innovations have unleashed a culinary revolution. Mobile apps tantalize taste buds, offering seamless food ordering and delivery. AI-powered recommendation engines cater to individual palates. QR code-based menus satiate our hunger for convenience. Data analytics optimize cooking techniques. The future holds tantalizing possibilities with augmented reality and voice assistants, transforming the way we savor, create, and experience food. Uncover the pathway to success for your brand's remarkable journey with WAC.",
      brands: [],
    },
    {
      id: 24,
      industry_name: "Wellness",
      image: healthcare,
      description:
        "Innovations pulse with transformative potential. Mobile apps enable remote consultations and pulse healthcare management. AI-driven diagnostics inject precision and speed while creating a steady flow of patient data. Data analytics breathe new life into treatment outcomes. The future beats with promise as wearable devices, and precision medicine radiate to redefine the rhythm of healthcare delivery. Experience the blueprint that will catapult your healthcare brand to the next level with WAC.",
      brands: [],
    },
    {
      id: 25,
      industry_name: "Electronics",
      image: automobile,
      description:
        "We are guided by technology where possibilities know no bounds, autonomous driving takes the wheel, guided by sophisticated IT systems, ushering in a new era of mobility. Connectivity weaves a mesmerising tapestry of smart features, seamlessly blending IT services into the very essence of the vehicles. Discover how we plan to kick off your brand identity to the next level",
      brands: [logo1, logo1, logo1, logo1, logo1, logo1],
    },
    {
      id: 26,
      industry_name: "Electrical",
      image: corporate,
      description:
        "The future of corporates is evolving. Agile organisations that embrace technology, sustainability, and diversity will thrive. Remote work and digital collaboration will reshape the workplace, fostering global talent and flexible environments. Customer focus and ethical practices will be key, as corporations adapt to meet evolving expectations, creating a prosperous and purposeful future. To know more about our master plan for the corporate world, talk to us today!",
      brands: [],
    },
    {
      id: 27,
      industry_name: "Specialty Product",
      image: education,
      description:
        "In a world where knowledge is power, education is undergoing a transformative shift. Technology enables personalised and accessible learning experiences. Online platforms and digital resources offer flexibility and remote education. Adaptive systems cater to individual needs, while virtual and augmented reality enhance engagement. The future of education holds immense potential, empowering learners and nurturing lifelong knowledge in a dynamic world. Discover how we will revolutionise your education brand to a new dimension.",
      brands: [],
    },
    {
      id: 28,
      industry_name: "Fashion",
      image: electronics,
      description:
        "A fascinating chapter is on the horizon in the electronics industry. Over the ‘not-so-far-away’ years, customers will take centre stage, with tailored technological innovations and AI-powered companions that shape the way we experience electronics. Imagine a seamless network connecting these devices, granting users newfound control while maintaining trust, efficiency, and clear communication. The IT services at Webandcrafts ensure your brand plays a leading role, adapting to the electronics panorama while leaving a lasting impression.",
      brands: [],
    },
    {
      id: 29,
      industry_name: "Retail",
      image: entertainment,
      description:
        "Picture the future of entertainment as a journey crafted just for you. In this tale, technology and AI join forces to create personalised adventures. Your experience unfolds seamlessly, like pages in a book that you control. Finding the chapter you love is a piece of cake now. Our commitment is to intensify enjoyment through open experiences for your users. Each moment of entertainment is a unique chapter in your own story, and we're here to make it happen.",
      brands: [],
    },
    {
      id: 30,
      industry_name: "Food",
      image: fashion,
      description:
        "The fashion industry leads as a trendsetter, evolving through technology's influence on creation, showcase, and consumption. E-commerce and social media platforms grant easy access to trends. Ethical practices driven by sustainability and inclusivity are on the rise. AI and virtual reality redefine the industry. The future brings limitless possibilities as fashion, technology, and personal expression intertwine. Discover how we weave the ultimate strategy to fabricate an unparalleled online experience at WAC.",
      brands: [],
    },
    {
      id: 31,
      industry_name: "Manufacturing",
      image: food,
      description:
        "IT innovations have unleashed a culinary revolution. Mobile apps tantalize taste buds, offering seamless food ordering and delivery. AI-powered recommendation engines cater to individual palates. QR code-based menus satiate our hunger for convenience. Data analytics optimize cooking techniques. The future holds tantalizing possibilities with augmented reality and voice assistants, transforming the way we savor, create, and experience food. Uncover the pathway to success for your brand's remarkable journey with WAC.",
      brands: [],
    },
    {
      id: 32,
      industry_name: "Agriculture",
      image: healthcare,
      description:
        "Innovations pulse with transformative potential. Mobile apps enable remote consultations and pulse healthcare management. AI-driven diagnostics inject precision and speed while creating a steady flow of patient data. Data analytics breathe new life into treatment outcomes. The future beats with promise as wearable devices, and precision medicine radiate to redefine the rhythm of healthcare delivery. Experience the blueprint that will catapult your healthcare brand to the next level with WAC.",
      brands: [],
    },
    {
      id: 33,
      industry_name: "Chemical",
      image: automobile,
      description:
        "We are guided by technology where possibilities know no bounds, autonomous driving takes the wheel, guided by sophisticated IT systems, ushering in a new era of mobility. Connectivity weaves a mesmerising tapestry of smart features, seamlessly blending IT services into the very essence of the vehicles. Discover how we plan to kick off your brand identity to the next level",
      brands: [logo1, logo1, logo1, logo1, logo1, logo1],
    },
    {
      id: 34,
      industry_name: "Specialty Chemical",
      image: corporate,
      description:
        "The future of corporates is evolving. Agile organisations that embrace technology, sustainability, and diversity will thrive. Remote work and digital collaboration will reshape the workplace, fostering global talent and flexible environments. Customer focus and ethical practices will be key, as corporations adapt to meet evolving expectations, creating a prosperous and purposeful future. To know more about our master plan for the corporate world, talk to us today!",
      brands: [],
    },
    {
      id: 35,
      industry_name: "FMCG",
      image: education,
      description:
        "In a world where knowledge is power, education is undergoing a transformative shift. Technology enables personalised and accessible learning experiences. Online platforms and digital resources offer flexibility and remote education. Adaptive systems cater to individual needs, while virtual and augmented reality enhance engagement. The future of education holds immense potential, empowering learners and nurturing lifelong knowledge in a dynamic world. Discover how we will revolutionise your education brand to a new dimension.",
      brands: [],
    },
    {
      id: 36,
      industry_name: "Gifting",
      image: electronics,
      description:
        "A fascinating chapter is on the horizon in the electronics industry. Over the ‘not-so-far-away’ years, customers will take centre stage, with tailored technological innovations and AI-powered companions that shape the way we experience electronics. Imagine a seamless network connecting these devices, granting users newfound control while maintaining trust, efficiency, and clear communication. The IT services at Webandcrafts ensure your brand plays a leading role, adapting to the electronics panorama while leaving a lasting impression.",
      brands: [],
    },
    {
      id: 37,
      industry_name: "Hotel",
      image: entertainment,
      description:
        "Picture the future of entertainment as a journey crafted just for you. In this tale, technology and AI join forces to create personalised adventures. Your experience unfolds seamlessly, like pages in a book that you control. Finding the chapter you love is a piece of cake now. Our commitment is to intensify enjoyment through open experiences for your users. Each moment of entertainment is a unique chapter in your own story, and we're here to make it happen.",
      brands: [],
    },
    {
      id: 38,
      industry_name: "Furniture/Furnishing",
      image: fashion,
      description:
        "The fashion industry leads as a trendsetter, evolving through technology's influence on creation, showcase, and consumption. E-commerce and social media platforms grant easy access to trends. Ethical practices driven by sustainability and inclusivity are on the rise. AI and virtual reality redefine the industry. The future brings limitless possibilities as fashion, technology, and personal expression intertwine. Discover how we weave the ultimate strategy to fabricate an unparalleled online experience at WAC.",
      brands: [],
    },
    {
      id: 39,
      industry_name: "Modular Kitchen",
      image: food,
      description:
        "IT innovations have unleashed a culinary revolution. Mobile apps tantalize taste buds, offering seamless food ordering and delivery. AI-powered recommendation engines cater to individual palates. QR code-based menus satiate our hunger for convenience. Data analytics optimize cooking techniques. The future holds tantalizing possibilities with augmented reality and voice assistants, transforming the way we savor, create, and experience food. Uncover the pathway to success for your brand's remarkable journey with WAC.",
      brands: [],
    },
    {
      id: 40,
      industry_name: "Dental Services",
      image: healthcare,
      description:
        "Innovations pulse with transformative potential. Mobile apps enable remote consultations and pulse healthcare management. AI-driven diagnostics inject precision and speed while creating a steady flow of patient data. Data analytics breathe new life into treatment outcomes. The future beats with promise as wearable devices, and precision medicine radiate to redefine the rhythm of healthcare delivery. Experience the blueprint that will catapult your healthcare brand to the next level with WAC.",
      brands: [],
    },
    {
      id: 41,
      industry_name: "IVF Clinic",
      image: healthcare,
      description:
        "Innovations pulse with transformative potential. Mobile apps enable remote consultations and pulse healthcare management. AI-driven diagnostics inject precision and speed while creating a steady flow of patient data. Data analytics breathe new life into treatment outcomes. The future beats with promise as wearable devices, and precision medicine radiate to redefine the rhythm of healthcare delivery. Experience the blueprint that will catapult your healthcare brand to the next level with WAC.",
      brands: [],
    },
    {
      id: 42,
      industry_name: "Skin / Hair Services",
      image: healthcare,
      description:
        "Innovations pulse with transformative potential. Mobile apps enable remote consultations and pulse healthcare management. AI-driven diagnostics inject precision and speed while creating a steady flow of patient data. Data analytics breathe new life into treatment outcomes. The future beats with promise as wearable devices, and precision medicine radiate to redefine the rhythm of healthcare delivery. Experience the blueprint that will catapult your healthcare brand to the next level with WAC.",
      brands: [],
    },
  ];

  //   const [selectedIndustry, setSelectedIndustry] = useState(null);
  //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //   const openDrawer = (industry) => {
  //     setSelectedIndustry(industry);
  //     setIsDrawerOpen(true);
  //   };

  //   const closeDrawer = () => {
  //     setIsDrawerOpen(false);
  //   };

  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      setTimeout(() => setIsOverlayVisible(true), 50);
    } else {
      setIsOverlayVisible(false);
    }
  }, [isDrawerOpen]);

  const openDrawer = (industry) => {
    setSelectedIndustry(industry);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Fragment>
      <Section15 />
      <section className={styles.section}>
        <ul className={styles.list}>
          {data.map((industry, index) => (
            <li
              key={index}
              className={styles.listItem}
              onClick={() => openDrawer(industry)}
            >
              <span className={styles.industryName}>
                {industry.industry_name}
              </span>
              <span className={styles.arrow}>→</span>
            </li>
          ))}
        </ul>
        {/* {isDrawerOpen && (
          <>
            <div className={styles.overlay} onClick={closeDrawer}></div>
            <div
              className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}
            >
              <button className={styles.closeButton} onClick={closeDrawer}>
                ×
              </button>
              <div className={styles.drawerContent}>
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.name}
                  className={styles.industryImage}
                />
                <h2>{selectedIndustry.name}</h2>
                <p>{selectedIndustry.description}</p>
              </div>
            </div>
          </>
        )} */}

        <div
          className={`${styles.overlay} ${
            isOverlayVisible ? styles.visible : ""
          }`}
          //   onClick={closeDrawer}
        ></div>
        <div className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}>
          {selectedIndustry && (
            <>
              <button className={styles.closeButton} onClick={closeDrawer}>
                <MdClose />
              </button>
              <div className={styles.drawerContent}>
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.industry_name}
                  className={styles.industryImage}
                />
                <div className={styles.industryInfo}>
                  <h2>{selectedIndustry.industry_name}</h2>
                  <p>{selectedIndustry.description}</p>
                  <h2>Projects</h2>

                  <div className={styles.project_images}>
                    {selectedIndustry.brands.map((item, index) => {
                      return <img src={item} alt="image 1" key={index} />;
                    })}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Section16;
