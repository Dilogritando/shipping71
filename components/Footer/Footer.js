import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import TransparentWhiteLogo from "../../public/71assets/71lbs_Logo_WHITE 1.png";

const Footer = () => {
  return (
    <footer className={styles.Footer__container}>
      <div className={styles.Footer__container__content}>
        {/* Logo, Social media icons and links- Change "bottom" to "left"*/}
        <div className={styles.Footer__left}>
          <div className={styles.Footer__left__logo}>
            <Link href="/" passHref>
              <Image
                src={TransparentWhiteLogo}
                alt="71lbs Logo, white"
                className={styles.Footer__left__logo__image}
              />
            </Link>
          </div>
          <div className={styles.Footer__left__social}>
            <h4 className={styles.Footer__title}>Follow us: </h4>
            <div className={styles.socialIcons}>
              <Link href="https://www.facebook.com/71lbs" passHref>
                <Image
                  src="/Facebook_LOGO.svg"
                  alt="Link to 71lbs Facebook page"
                  className={styles.socialIcons__logos}
                  width="68"
                  height="70"
                />
              </Link>
              <Link href="https://www.instagram.com/71lbs_/" passHref>
                <Image
                  src="/Instagram_LOGO.svg"
                  alt="Link to 71lbs Instagram page"
                  className={styles.socialIcons__logos}
                  width="68"
                  height="70"
                />
              </Link>
              <Link href="https://www.linkedin.com/company/71lbs" passHref>
                <Image
                  src="/LinkedIn_LOGO.svg"
                  alt="Link to 71lbs LinkedIn page"
                  className={styles.socialIcons__logos}
                  width="68"
                  height="70"
                />
              </Link>
              <Link href="https://twitter.com/71lbs" passHref>
                <Image
                  src="/Twitter_LOGO.svg"
                  alt="Link to 71lbs Twitter page"
                  className={styles.socialIcons__logos}
                  width="68"
                  height="70"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Change "right" to "right" */}
        <div className={styles.Footer__right}>
          <div className={styles.Footer__right__Service}>
            <h4 className={styles.Footer__title}>Service Directory</h4>
            <ul className={styles.Footer__list}>
              <li className={styles.Footer__list__options}>
                <Link href="/shipping-contract-negotiations">
                  <a className={styles.Footer__links}>Contract Negotiations</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/shipping-refunds">
                  <a className={styles.Footer__links}>Shipping Refunds</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/lost-damaged-shipping-claims">
                  <a className={styles.Footer__links}>
                    Lost &amp; Damaged Claims
                  </a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/amazon-shipping-fba">
                  <a className={styles.Footer__links}>Amazon FBA</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/shipping-insurance">
                  <a className={styles.Footer__links}>Shipping Insurance</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/fedex-ex-ray-shipping">
                  <a className={styles.Footer__links}>FedEx Ex-Ray</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/premium-shipping-analytics">
                  <a className={styles.Footer__links}>
                    Premium Shipping Analytics
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.Footer__right__Company}>
            <h4 className={styles.Footer__title}>Company</h4>
            <ul className={styles.Footer__list}>
              <li className={styles.Footer__list__options}>
                <Link href="/about-us">
                  <a className={styles.Footer__links}>About Us</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/shipping-refunds-claims-experts">
                  <a className={styles.Footer__links}>Meet the Team</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/shipping-refunds-claims-success-testimonials">
                  <a className={styles.Footer__links}>Testimonials</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="https://blog.71lbs.com/">
                  <a className={styles.Footer__links}>Blogs</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/privacy-policy">
                  <a className={styles.Footer__links}>Privacy Policy</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/terms-of-service">
                  <a className={styles.Footer__links}>Terms of Service</a>
                </Link>
              </li>
              <li className={styles.Footer__list__options}>
                <Link href="/contact-us">
                  <a className={styles.Footer__links}>Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className={styles.Footer__legal}>
        2022 © 71lbs, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
