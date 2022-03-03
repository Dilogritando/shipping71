import { useState } from "react";
import styles from "./ServicesSlider.module.scss";
import Image from "next/image";

const SliderNewModule = (info) => {
  let servicesArray = info.info;
  console.log("servicesArray es:", servicesArray);

  const totalSlides = servicesArray.length;
  let i = 0;

  const handleArrowBack = () => {
    console.log("Back");
  };
  const handleArrowNext = () => {
    console.log("Next");
  };
  const slideStructure = (service, index) => {
    return (
      <div className={styles.SliderNewModule__content} key={index}>
        <div className={styles.SliderNewModule__content__text}>
          <h3 className={styles.SliderNewModule__content__text__title}>
            {service.title}
          </h3>
          <h4 className={styles.SliderNewModule__content__text__subtitle}>
            {service.subtitle}
          </h4>
          <p className={styles.SliderNewModule__content__text__serviceText}>
            {service.serviceText}
          </p>
          <button className={styles.SliderNewModule__content__text__btn}>
            Learn More
          </button>
        </div>
        <div className={styles.SliderNewModule__content__image}>
          <Image
            src={service.serviceImage}
            alt={service.altImage}
            layout="fill"
          />
        </div>
      </div>
    );
  };
  return (
    <div className={styles.SliderNewModule__container}>
      <div
        className={styles.SliderNewModule__arrowBack}
        onClick={handleArrowBack}
      >
        <p>{"<"}</p>
      </div>

      <div className={styles.SliderNewModule__contentContainer}>
        {servicesArray?.map((service, index) => {
          return slideStructure(service, index);
        })}
      </div>

      <div
        className={styles.SliderNewModule__arrowNext}
        onClick={handleArrowNext}
      >
        <p>{">"}</p>
      </div>
    </div>
  );
};

export default SliderNewModule;
