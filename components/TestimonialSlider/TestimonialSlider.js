import styles from "./TestimonialSlider.module.scss";
import Image from "next/image";
import TestimonialSliderPlaceholder from "../../public/PlaceholdersHome/TestimonialsSliderPlaceholder.png";

const TestimonialSlider = () => {
  return (
    <div className={styles.TestimonialSlider__container}>
      <Image
        src={TestimonialSliderPlaceholder}
        alt=""
        className={styles.TestimonialSlider__image}
      />
    </div>
  );
};

export default TestimonialSlider;
