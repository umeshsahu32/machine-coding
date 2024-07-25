import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import PillCarousel from "./PillCarousel";
import styles from "./Section07.module.css";
import Faqs from "./Faqs";

const data = [
  {
    id: 1,
    category: "Zathin Hatity Bigtax",
  },
  {
    id: 2,
    category: "Hatity Zathin Gembucket",
  },
  {
    id: 3,
    category: "Bigtax Gembucket Zathin",
  },
  {
    id: 4,
    category: "Gembucket Zamit Kanlam",
  },
  {
    id: 5,
    category: "Lotlux Hatity Ronstring",
  },
  {
    id: 6,
    category: "Ronstring Lotlux Hatity",
  },
  {
    id: 7,
    category: "Hatity Tempsoft Gembucket",
  },
  {
    id: 8,
    category: "Zamit Gembucket Ronstring",
  },
  {
    id: 9,
    category: "Kanlam Ronstring Keylex",
  },
  {
    id: 10,
    category: "Keylex Hatity Tempsoft",
  },
  {
    id: 11,
    category: "Hatity Gembucket Zathin",
  },
  {
    id: 12,
    category: "Tempsoft Gembucket Hatity",
  },
];

const faqData = [
  {
    id: 1,
    section_id: 1,
    question: "Extension or deepening of buccolabial or lingual sulcus",
    answer:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    id: 2,
    section_id: 1,
    question:
      "Other surgical occlusion of vessels, other vessels of head and neck",
    answer:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  },
  {
    id: 3,
    section_id: 1,
    question: "Open chest cardiac massage",
    answer:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    id: 4,
    section_id: 1,
    question:
      "Microscopic examination of blood, cell block and Papanicolaou smear",
    answer:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  },
  {
    id: 5,
    section_id: 2,
    question: "Intracardiac echocardiography",
    answer:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    id: 6,
    section_id: 2,
    question: "Other diagnostic procedures on facial bones and joints",
    answer:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  },
  {
    id: 7,
    section_id: 2,
    question: "Nasal function study",
    answer:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  },
  {
    id: 8,
    section_id: 3,
    question: "Wedge osteotomy, radius and ulna",
    answer:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    id: 9,
    section_id: 3,
    question: "Other operations on cul-de-sac",
    answer:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
  },
  {
    id: 10,
    section_id: 3,
    question: "Urinary manometry",
    answer:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    id: 11,
    section_id: 4,
    question: "Debridement of open fracture site, tibia and fibula",
    answer:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  },
  {
    id: 12,
    section_id: 5,
    question: "Closure of fistula of duodenum",
    answer:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  },
  {
    id: 13,
    section_id: 5,
    question:
      "Endoscopic excision or destruction of lesion or tissue of pancreatic duct",
    answer:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  },
  {
    id: 14,
    section_id: 5,
    question: "Other and unspecified repair of ventricular septal defect",
    answer:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    id: 15,
    section_id: 5,
    question:
      "Microscopic examination of specimen from lower gastrointestinal tract and of stool, bacterial smear",
    answer:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  },
  {
    id: 16,
    section_id: 6,
    question: "Ligation of vas deferens",
    answer:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  },
  {
    id: 17,
    section_id: 6,
    question:
      "Microscopic examination of specimen from lower gastrointestinal tract and of stool, culture",
    answer:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    id: 18,
    section_id: 7,
    question: "Esophageal speech training",
    answer:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
  {
    id: 19,
    section_id: 7,
    question: "Evacuation of obstetrical incisional hematoma of perineum",
    answer:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    id: 20,
    section_id: 7,
    question: "Creation of septal defect in heart",
    answer:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  },
  {
    id: 21,
    section_id: 7,
    question: "Skeletal series",
    answer:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    id: 22,
    section_id: 8,
    question: "Other operations on lymphatic structures",
    answer:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    id: 23,
    section_id: 8,
    question: "Endarterectomy, upper limb vessels",
    answer:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    id: 24,
    section_id: 8,
    question: "Internal drainage of pancreatic cyst",
    answer:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    id: 25,
    section_id: 8,
    question:
      "Injection of locally acting therapeutic substance into other soft tissue",
    answer:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    id: 26,
    section_id: 9,
    question: "Other operations on lymphatic structures",
    answer:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    id: 27,
    section_id: 9,
    question: "Endarterectomy, upper limb vessels",
    answer:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    id: 28,
    section_id: 9,
    question: "Internal drainage of pancreatic cyst",
    answer:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    id: 29,
    section_id: 10,
    question:
      "Injection of locally acting therapeutic substance into other soft tissue",
    answer:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    id: 30,
    section_id: 10,
    question: "Other operations on lymphatic structures",
    answer:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    id: 31,
    section_id: 11,
    question: "Endarterectomy, upper limb vessels",
    answer:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    id: 32,
    section_id: 11,
    question: "Internal drainage of pancreatic cyst",
    answer:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    id: 33,
    section_id: 11,
    question:
      "Injection of locally acting therapeutic substance into other soft tissue",
    answer:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  },
  {
    id: 34,
    section_id: 12,
    question: "Other operations on lymphatic structures",
    answer:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    id: 35,
    section_id: 12,
    question: "Endarterectomy, upper limb vessels",
    answer:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    id: 36,
    section_id: 12,
    question: "Internal drainage of pancreatic cyst",
    answer:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
];

const Section07 = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeFaqData, setActiveFaqData] = useState([]);

  const filteresFaqs = () => {
    const res = faqData.filter((item) => item.section_id === activeTab);
    setActiveFaqData(res);
  };

  useEffect(() => {
    filteresFaqs();
  }, [activeTab]);

  console.log("activeFaqData", activeTab);

  const pillClickHandler = (id) => {
    console.log("id#####", id);
    setActiveTab(id);
  };

  return (
    <Fragment>
      <div className={styles.sectionContainer}>
        <PillCarousel
          categories={data}
          onClick={(id) => pillClickHandler(id)}
          active={activeTab}
        />
        <div>
          <Faqs data={activeFaqData} />
        </div>
      </div>
    </Fragment>
  );
};

export default Section07;
