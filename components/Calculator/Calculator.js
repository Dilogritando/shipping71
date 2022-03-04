import styles from "./Calculator.module.scss";
import CalculatorPlaceholder from "../../public/PlaceholdersHome/CalculatorHome.png";
import Image from "next/image";

const Calculator = () => {
  return (
    <div className={styles.Calculator__container}>
      <h2 className={styles.Calculator__title}>
        Calculate Your Potential Shipping Savings
      </h2>
      <Image
        src={CalculatorPlaceholder}
        alt=""
        className={styles.Calculator__image}
      />
      <div className={styles.Calculator__box}>
        <div className={styles.Calculator__box__image}>
          {/* <Image src="" alt="" className={styles.Calculator__box__icon} /> */}
        </div>
        <div className={styles.Calculator__box__content}>
          <h5 className={styles.Calculator__box__content__title}></h5>
          <div className={styles.Calculator__box__content__form}></div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
