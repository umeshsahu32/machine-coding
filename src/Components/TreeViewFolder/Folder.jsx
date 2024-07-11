import React, { Fragment, useState } from "react";
import styles from "./TreeViewFolder.module.css";

const Folder = ({ files }) => {
  const [expand, setExpand] = useState(false);

  //   @ JSX START
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.folder} onClick={() => setExpand(!expand)}>
          {files.isFolder ? (
            <button className={expand ? styles.expand : ""}>{">"}</button>
          ) : null}
          {files.name}
        </div>
        <div>
          {files.isFolder &&
            expand &&
            files.children.map((exp) => (
              <div>
                <Folder files={exp} />
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Folder;
