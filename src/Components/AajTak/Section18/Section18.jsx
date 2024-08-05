import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./Section18.module.css";

const Section18 = () => {
  return (
    <Fragment>
      <section className={styles.section}>
        <div className={styles.card_container}>
          <h3>Never Gonna Give You Up</h3>
          <h6>RICK ASTLEY</h6>
          <p>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
            quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
            grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
            vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.
            Quick zephyrs blow, vexing daft Jim. Sex-charg
          </p>
          <Link to="#">View More</Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Section18;
