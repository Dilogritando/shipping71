import styles from "./FactsFigures.module.scss";
import FactsPlaceholder from "../../public/PlaceholdersHome/FactsHome.png";
import Image from "next/image";

const FactsFigures = () => {
  return (
    <div className={styles.FactsFigures__container}>
      <h2 className={styles.FactsFigures__title}>Why 71lbs?</h2>
      <div className={styles.FactsFigures__facts}>
        <div className={styles.FactsFigures__facts__box}></div>
        <div className={styles.FactsFigures__facts__box}></div>
        <div className={styles.FactsFigures__facts__box}></div>
        <div className={styles.FactsFigures__facts__box}></div>
      </div>
      <Image
        src={FactsPlaceholder}
        alt=""
        className={styles.FactsFigures__image}
      />
      <button className={styles.FactsFigures__btn}>Start Saving Now!</button>
    </div>
  );
};

export default FactsFigures;
