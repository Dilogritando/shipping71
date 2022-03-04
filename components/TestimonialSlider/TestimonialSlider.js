import styles from "./TestimonialSlider.module.scss";
import Image from "next/image";
import TestimonialSliderPlaceholder from "../../public/PlaceholdersHome/TestimonialsSliderPlaceholder.png";
import TestimonialsDivider from "../../public/TestimonialsDivider.png";
import TestimonialsPlaceholder from "../../public/PlaceholdersHome/TestimonialsHome.png";
import Budsies_Logo from "../../public/BrandsLogos/Budsies_Logo.png";
import Shipmonk_Logo from "../../public/BrandsLogos/Shipmonk_Logo.png";
import UnderwearStation_Logo from "../../public/BrandsLogos/UnderwearStation_Logo.png";
import SkatePro_Logo from "../../public/BrandsLogos/SkatePro_Logo.png";

const TestimonialSlider = () => {
  const testimonials = [
    {
      logoUrl: UnderwearStation_Logo,
      sourceName: "Joel G.",
      sourceRole: "President",
      sourceQuote:
        "71lbs helped us negotiate our FedEx rates way lower than what I had been able to do after years of negotiating.",
    },
    {
      logoUrl: Shipmonk_Logo,
      sourceName: "Jan B.",
      sourceRole: "CEO",
      sourceQuote:
        "There is no obligation. It doesn’t cost anything. You just get the money. It’s pretty much a no-brainer decision.",
    },
    {
      logoUrl: Budsies_Logo,
      sourceName: "Melissa H.",
      sourceRole: "VP of Ops.",
      sourceQuote:
        "Signing up with 71lbs was effortless! we essentially didn't have to do anything and we started receiving money.",
    },
    {
      logoUrl: "SkatePro_Logo",
      sourceName: "Daron H.",
      sourceRole: "President",
      sourceQuote:
        "We have been saving thousands of dollars a month. It’s frictionless, just as promised. ",
    },
  ];
  return (
    <div className={styles.TestimonialSlider__container}>
      <Image
        src={TestimonialSliderPlaceholder}
        alt=""
        className={styles.TestimonialSlider__image}
      />

      {/* <div className={styles.TestimonialSlider__source}></div>

      <Image
      src={TestimonialsDivider}
      alt="Blue vertical line dividing the brand logo and source from quote"
      className={styles.TestimonialSlider__divider} />

      <div className={styles.TestimonialSlider__testimonial}></div> */}
    </div>
  );
};

export default TestimonialSlider;
