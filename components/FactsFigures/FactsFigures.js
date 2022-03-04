import styles from "./FactsFigures.module.scss";
import FactsPlaceholder from "../../public/PlaceholdersHome/FactsHome.png";
import CustomerService__Icon from "../../public/FactsIcons/CustomerService_Icon.svg";
import HappyCustomers__Icon from "../../public/FactsIcons/HappyCustomers_Icon.svg";
import NetPromoterScore__Icon from "../../public/FactsIcons/NetPromoterScore_Icon.svg";
import ShippingSpend__Icon from "../../public/FactsIcons/ShippingSpend_Icon.svg";
import Image from "next/image";

const FactsFigures = () => {
  return (
    <div className={styles.FactsFigures__container}>
      <h2 className={styles.FactsFigures__title}>Why 71lbs?</h2>

      <div className={styles.FactsFigures__facts}>
        <div className={styles.FactsFigures__facts__box}>
          <div className={styles.FactsFigures__facts__box__imgContainer}>
            <Image
              src={HappyCustomers__Icon}
              alt="Icon of a group of people sharing ideas and piecing ideas together like a puzzle"
              className={styles.FactsFigures__image}
              layout="responsive"
            />
          </div>
          <p className={styles.FactsFigures__facts__subtitle}>5,000+</p>
          <p className={styles.FactsFigures__facts__description}>
            Happy Customers <br /> (and growing)
          </p>
        </div>
        <div className={styles.FactsFigures__facts__box}>
          <div className={styles.FactsFigures__facts__box__imgContainer}>
            <Image
              src={CustomerService__Icon}
              alt="Icon of a piggy banck"
              className={styles.FactsFigures__image}
              layout="responsive"
            />
          </div>
          <p className={styles.FactsFigures__facts__subtitle}>$50 Million</p>
          <p className={styles.FactsFigures__facts__description}>
            In Customer Savings
          </p>
        </div>
        <div className={styles.FactsFigures__facts__box}>
          <div className={styles.FactsFigures__facts__box__imgContainer}>
            <Image
              src={ShippingSpend__Icon}
              alt="Icon showcasing what would be a printed finacial report"
              className={styles.FactsFigures__image}
              layout="responsive"
            />
          </div>
          <p className={styles.FactsFigures__facts__subtitle}>$1 Billion</p>
          <p className={styles.FactsFigures__facts__description}>
            Benchmarked <br /> Shipping Spend
          </p>
        </div>
        <div className={styles.FactsFigures__facts__box}>
          <div className={styles.FactsFigures__facts__box__imgContainer}>
            <Image
              src={NetPromoterScore__Icon}
              alt="Icon showcasing a slider that moves between sad faces and happy faces"
              className={styles.FactsFigures__image}
              layout="responsive"
            />
          </div>
          <p className={styles.FactsFigures__facts__subtitle}>78 NPS</p>
          <p className={styles.FactsFigures__facts__description}>
            Net Promoter Score
          </p>
        </div>
      </div>

      {/* <Image
        src={FactsPlaceholder}
        alt=""
        className={styles.FactsFigures__image}
      /> */}
      <button className={styles.FactsFigures__btn}>Start Saving Now!</button>
    </div>
  );
};

export default FactsFigures;
