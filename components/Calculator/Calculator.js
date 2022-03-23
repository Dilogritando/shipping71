import styles from "./Calculator.module.scss";
import CalculatorPlaceholder from "../../public/PlaceholdersHome/CalculatorHome.png";
import CalculatorIcon from "../../public/Calculator_Icon.svg";
import Calculator_proper_placeholder from "../../public/Calculator_proper_placeholder.png";
import Image from "next/image";

const Calculator = () => {
  function updateMeter() {
    var SGmin = 0.10333;
    var SGmax = 0.17667;
    var SAmin = 0.13667;
    var SAmax = 0.24333;

    console.log("Cambió algo");
  }

  return (
    <div className={styles.Calculator__container}>
      <h2 className={styles.Calculator__title}>
        Calculate Your Potential Shipping Savings
      </h2>
      {/*       <Image
        src={CalculatorPlaceholder}
        alt=""
        className={styles.Calculator__image}
      /> */}

      <div className={styles.Calculator__box}>
        <div className={styles.Calculator__box__image}>
          <Image
            src={CalculatorIcon}
            alt="Icon of an opened box"
            className={styles.Calculator__box__icon}
          />
        </div>
        <div className={styles.Calculator__box__content}>
          <h5 className={styles.Calculator__box__content__title}>
            How much could your company save?
          </h5>
          <div className={styles.Calculator__box__content__form}>
            {/* <Image
              src={Calculator_proper_placeholder}
              alt=""
              className={styles.Calculator__imageText}
            /> */}
            <div id="calculator">
              <h2>How much money could 71lbs save your company?</h2>
              <h4>HOW MUCH COULD YOUR COMPANY SAVE?</h4>
              <br />
              <p>What is your annual shipping spend?</p>
              <input
                type="text"
                className="formtag-control"
                name="rc-spend"
                id="rc-spend"
                value="100000"
                onChange={updateMeter()}
              />
              <br />
              <p>Tell us your shipping delivery ratio?</p>
              <br />
              <input
                id="rc-slider"
                min="0"
                max="1"
                step="0.2"
                value=".2"
                /* style="text-align: center;" */
                type="range"
                onChange={updateMeter()}
              />
              <div className="clearall">
                <p>
                  <span id="rc-ground">80</span>% ground
                </p>
                <p className="pull-right small">
                  <span id="rc-overnight">20</span>% overnight
                </p>
              </div>
              <div id="meter-container">
                <div className="meter-outer-container">
                  <div className="meter-inner-container">
                    <p>Your annual savings could be:</p>
                    <h2>
                      $<span className="as-low">12,599</span> to $
                      <span className="as-high">22,800</span>
                    </h2>
                  </div>
                  <div className="">
                    <a
                      href="/sign-up"
                      className="btn btn-block btn-primary btn-hero"
                    >
                      Start Saving
                    </a>
                  </div>
                  <div>
                    <small
                    /* style="font-size: 12px; font-weight: 400;" */
                    >
                      * This tool is designed to provide estimates ONLY.
                      <br />
                      Actual savings depends upon exact shipping data.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
