import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./FeelingsHome.module.scss";

const FeelingsCard = (data) => {
  const [isLooking, setIsLooking] = useState(false);
  let colorRef = `${data.lineColor}`;
  const [borderStyle, setBorderStyle] = useState(`1px solid black`);

  let imgSrc = `${data.image}`;

  const onMouseEnterCard = (e) => {
    setIsLooking(true);
    setBorderStyle(`12px solid ${colorRef}`);
  };
  const onMouseLeaveCard = (e) => {
    setIsLooking(false);
    setBorderStyle(`1px solid black`);
  };

  return (
    <div
      className={styles.Feelings__cards}
      id={data.id}
      onMouseOver={onMouseEnterCard}
      onMouseOut={onMouseLeaveCard}
    >
      {isLooking === true ? (
        <figure className={styles.Feelings__cards__figure}>
          <div
            className={styles.Feelings__cards__hover}
            style={{ border: borderStyle }}
          >
            <p className={styles.Feelings__cards__hover__text}>
              {data.internalMsg}
            </p>
          </div>

          <figcaption className={styles.Feelings__cards__msgBelow}>
            {" "}
            {data.msgBelow}{" "}
          </figcaption>
        </figure>
      ) : (
        <figure
          className={styles.Feelings__cards__figure}
          /* onMouseEnter={onMouseEnterCard}
          onMouseOut={onMouseLeaveCard} */
        >
          <Image
            style={{ border: borderStyle }}
            src={imgSrc}
            alt={data.alt}
            className={styles.Feelings__cards__img}
          />

          <figcaption className={styles.Feelings__cards__msgBelow}>
            {" "}
            {data.msgBelow}{" "}
          </figcaption>
        </figure>
      )}
    </div>
  );
};

export default FeelingsCard;
