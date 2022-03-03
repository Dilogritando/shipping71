import styles from "./ServicesSlider.module.scss";
import SliderNewModule from "./SliderNewModule.js";
import PlaceholderServiceSlider from "../../public/PlaceholderServiceSlider.png";
import ContractNSlider from "../../public/ContractNSlider.png";
import RefundsSlider from "../../public/RefundsSlider.png";

const ServicesSlider = () => {
  const servicesContentSlider = [
    {
      title: "Contract Negotiations",
      subtitle:
        "We have found that more than 62.3% of companies who ship with UPS & FedEx are overpaying the carrier.",
      serviceText:
        "How do you know if you have the best agreement for your shipping spend? Working with 71lbs ensures that you know the answer to this question & more.",
      redirectURL: "/",
      serviceImage: ContractNSlider.src,
      altImage: "",
    },
    {
      title: "Late Shipping Refunds",
      subtitle: "There are over $2 BILLION in unclaimed late delivery refunds.",
      serviceText:
        "Did you know that if your FedEx or UPS shipment is late-even by 60 seconds-you’re entitled to a full refund of the cost of your shipment? ",
      redirectURL: "/",
      serviceImage: RefundsSlider.src,
      altImage: "",
    },
    {
      title: "Other title",
      subtitle: "Other subtitle",
      serviceText:
        "Other copy Lorem ipsum dolor, sit amet consectetur adipisicing.",
      redirectURL: "/",
      serviceImage: PlaceholderServiceSlider.src,
      altImage: "",
    },
    {
      title: "Lost & Damaged Claims",
      subtitle:
        "Companies leave money on the table each day either because they don't file the lost or damaged claim or don't work the claim fully.",
      serviceText:
        "The process to recover your due refunds is tedious, time-consuming & does not always yield a refund. When you sign up for our services, we can do the heavy lifting for you, and will not charge for it until you see your refunds.",
      redirectURL: "/",
      serviceImage: PlaceholderServiceSlider.src,
      altImage: "",
    },
  ];
  return (
    <div className={styles.ServicesSlider__container}>
      <h2 className={styles.ServicesSlider__title}>
        How We Help Thousands Of Companies
      </h2>
      <SliderNewModule info={servicesContentSlider} />
    </div>
  );
};

export default ServicesSlider;
