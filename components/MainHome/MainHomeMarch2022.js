import React from "react";
import ReactPlayer from "react-player/lazy";
import styles from "./MainHomeMarch2022.module.scss";

const MainHomeMarch2022 = () => {
  return (
    <div className={styles.Hero__container}>
      <div className={styles.Hero__copy}>
        <h1 className={styles.Hero__copy__title}>
          Save Money <br />
          on Shipping
        </h1>
        <h2 className={styles.Hero__copy__subtitle}>
          A Service You Can Count On.
        </h2>
        <p className={styles.Hero__copy__text}>
          With 71lbs, you have a fully automated, human-backed system that
          proactively monitors your FedEx/UPS accounts, making reducing your
          shipping costs simple &amp; consistent.
        </p>
        <button className={styles.Hero__copy__btn}>
          Sign up for a Free Demo
        </button>
      </div>
      <div className={styles.Hero__video}>
        <div className={styles.Hero__video__proper}>
          <ReactPlayer
            light
            width="100%"
            height="240px"
            url="https://fdbef0a76c08b982db11-0672d8539c129f26551dec2c76292811.ssl.cf5.rackcdn.com/FreeShippingAssessment%20video.mp4"
            controls
            fallback="/PlaceholderHomeVideo.png"
          />
        </div>
        <div className={styles.Hero__video__controller}>
          <button className={styles.Hero__video__controller__btn}>
            WATCH VIDEO
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHomeMarch2022;
