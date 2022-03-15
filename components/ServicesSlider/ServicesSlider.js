import ReactDOM from "react-dom";
import styles from "./ServicesSlider.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PlaceholderServiceSlider from "../../public/PlaceholderServiceSlider.png";
import ContractNSlider from "../../public/ContractNSlider.png";
import RefundsSlider from "../../public/RefundsSlider.png";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

const ServicesSlider = () => {
  const servicesContentSlider = [
    {
      title: "Contract Negotiations",
      subtitle:
        "We have found that more than 62.3% of companies who ship with UPS & FedEx are overpaying the carrier.",
      serviceText:
        "How do you know if you have the best agreement for your shipping spend? Working with 71lbs ensures that you know the answer to this question & more.",
      redirectURL: "/services/shipping-contract-negotiations",
      serviceImage: ContractNSlider,
      altImage: "",
    },
    {
      title: "Late Shipping Refunds",
      subtitle: "There are over $2 BILLION in unclaimed late delivery refunds.",
      serviceText:
        "Did you know that if your FedEx or UPS shipment is late-even by 60 seconds-you’re entitled to a full refund of the cost of your shipment? ",
      redirectURL: "/services/shipping-refunds",
      serviceImage: RefundsSlider,
      altImage: "",
    },
    {
      title: "Other title",
      subtitle: "Other subtitle",
      serviceText:
        "Other copy Lorem ipsum dolor, sit amet consectetur adipisicing.",
      redirectURL: "/services/shipping-insurance",
      serviceImage: PlaceholderServiceSlider,
      altImage: "",
    },
    {
      title: "Lost & Damaged Claims",
      subtitle:
        "Companies leave money on the table each day either because they don't file the lost or damaged claim or don't work the claim fully.",
      serviceText:
        "The process to recover your due refunds is tedious, time-consuming & does not always yield a refund. When you sign up for our services, we can do the heavy lifting for you, and will not charge for it until you see your refunds.",
      redirectURL: "/services/lost-damaged-shipping-claims",
      serviceImage: PlaceholderServiceSlider,
      altImage: "",
    },
  ];
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
            <Link href={service.redirectURL}>
              <a>Learn More</a>
            </Link>
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
    <div className={styles.ServicesSlider__container}>
      <h2 className={styles.ServicesSlider__title}>
        How We Help Thousands Of Companies
      </h2>
      <Carousel showThumbs={false}>
        {servicesContentSlider.map((service, index) => {
          return slideStructure(service, index);
        })}
      </Carousel>
    </div>
  );
};

export default ServicesSlider;
