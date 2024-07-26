import React, { Fragment, useEffect, useState } from "react";
import styles from "./CustomTab.module.css";

const Tabs = (props) => {
  const [tabsHeaders, setTabsHeaders] = useState([]);
  const [contentMap, setContentMap] = useState({});
  const [active, setActive] = useState("");

  const { children } = props;

  useEffect(() => {
    const headers = [];
    const map = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { title } = element.props;
      headers.push(title);
      map[title] = element.props.children;
    });

    setContentMap(map); //content
    setTabsHeaders(headers); //Headers
    setActive(headers[0]);
  }, [props, children]);

  const changeTab = (header) => {
    setActive(header);
  };

  return (
    <Fragment>
      <div>
        <div className={styles.headers}>
          {tabsHeaders.map((header) => (
            <button
              className={`${styles.custom_button} ${
                active === header ? styles.selected : ""
              }`}
              key={header}
              onClick={() => changeTab(header)}
            >
              {header}
            </button>
          ))}
        </div>
        <div>
          {Object.keys(contentMap).map((key, idx) => {
            if (key === active) {
              return (
                <div key={idx} className={styles.tab_content}>
                  {contentMap[key]}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Tabs;
