import ReactDOM from "react-dom";
import styles from "./TestimonialSlider.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import TestimonialSliderPlaceholder from "../../public/PlaceholdersHome/TestimonialsSliderPlaceholder.png";
import TestimonialsDivider from "../../public/TestimonialsDivider.png";
import TestimonialsPlaceholder from "../../public/PlaceholdersHome/TestimonialsHome.png";
import Budsies_Logo from "../../public/BrandsLogos/Budsies_Logo.png";
import Shipmonk_Logo from "../../public/BrandsLogos/Shipmonk_Logo.png";
import UnderwearStation_Logo from "../../public/BrandsLogos/UnderwearStation_Logo.png";
import SkatePro_Logo from "../../public/BrandsLogos/SkatePro_Logo.png";
import { Carousel } from "react-responsive-carousel";

const TestimonialSlider = () => {
  const testimonials = [
    {
      logoUrl: UnderwearStation_Logo,
      logoAlt: "Logo of UnderwearStation company",
      sourceName: "Joel G.",
      sourceRole: "President",
      sourceQuote:
        "71lbs helped us negotiate our FedEx rates way lower than what I had been able to do after years of negotiating.",
    },
    {
      logoUrl: Shipmonk_Logo,
      logoAlt: "Logo of Shipmonk company",
      sourceName: "Jan B.",
      sourceRole: "CEO",
      sourceQuote:
        "There is no obligation. It doesn’t cost anything. You just get the money. It’s pretty much a no-brainer decision.",
    },
    {
      logoUrl: Budsies_Logo,
      logoAlt: "Logo of Budsies company",
      sourceName: "Melissa H.",
      sourceRole: "VP of Ops.",
      sourceQuote:
        "Signing up with 71lbs was effortless! we essentially didn't have to do anything and we started receiving money.",
    },
    {
      logoUrl: SkatePro_Logo,
      logoAlt: "Logo of SkatePro company",
      sourceName: "Daron H.",
      sourceRole: "President",
      sourceQuote:
        "We have been saving thousands of dollars a month. It’s frictionless, just as promised. ",
    },
  ];
  const testimonialSlideStructure = (testimonial, index) => {
    return (
      <div className={styles.TestimonialSlider__container__slide}>
        <div className={styles.TestimonialSlider__source}>
          <div className={styles.TestimonialSlider__source__image}>
            <Image
              src={testimonial.logoUrl}
              alt={testimonial.logoAlt}
              width="50px"
              height="50px"
            />
          </div>
          <p className={styles.TestimonialSlider__source__name}>
            {testimonial.sourceName}
          </p>
          <p className={styles.TestimonialSlider__source__role}>
            {testimonial.sourceRole}
          </p>
        </div>

        <Image
          width="10px"
          height="100%"
          src={TestimonialsDivider}
          alt="Blue vertical line dividing the brand logo and source from quote"
          className={styles.TestimonialSlider__divider}
        />

        <div className={styles.TestimonialSlider__testimonial}>
          <blockquote className={styles.TestimonialSlider__testimonial__text}>
            {testimonial.sourceQuote}
          </blockquote>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.TestimonialSlider__container}>
      <Carousel
        showThumbs={false}
        className={styles.TestimonialSlider__container__carousel}
      >
        {testimonials.map((service, index) => {
          return testimonialSlideStructure(service, index);
        })}
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
