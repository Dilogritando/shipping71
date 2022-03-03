import styles from "./FeelingsHome.module.scss";
import FeelingsCard from "./FeelingsCard";

import HappyCard from "../../public/FeelingsCards/HappyCard.png";
import BlueCard from "../../public/FeelingsCards/BlueCard.png";
import WhiteCard from "../../public/FeelingsCards/WhiteCard.png";

const FeelingsHome = () => {
  return (
    <div className={styles.Feelings__container}>
      <h2 className={styles.Feelings__title}>
        Does your shipping carrier make you feel....
      </h2>
      <div className={styles.Feelings__cardsContainer}>
        <FeelingsCard
          id="first"
          image={HappyCard.src}
          alt={"Happy face icon over orange background"}
          internalMsg={
            "They may, but the carrier’s objective is to maximize the revenue they sell for their services. Unless you ask for fair discounts, you won’t get them."
          }
          msgBelow={"Your shipping carrier takes good care of you"}
          lineColor="#ff7100"
        />
        <FeelingsCard
          id="second"
          image={BlueCard.src}
          alt={"Sad or frowning face icon over blue background"}
          internalMsg={
            "Pricing is based on shipping volume. The more you ship, the more you are entitled to."
          }
          msgBelow={"You don’t know if you’re getting a fair deal"}
          lineColor="#5C92C5"
        />
        <FeelingsCard
          id="third"
          image={WhiteCard.src}
          alt={"Sad face icon with eyes closed over white background"}
          internalMsg={
            "We have the tools and resources to monitor your shipping data, in a fast, easy to navigate dashboard."
          }
          msgBelow={
            "You have no time, tools or resources to monitor your carrier’s performance"
          }
          lineColor="#000000"
        />
      </div>
      <button className={styles.Feelings__button}>
        Schedule a Call with a Shipping Therapist!
      </button>
    </div>
  );
};

export default FeelingsHome;
