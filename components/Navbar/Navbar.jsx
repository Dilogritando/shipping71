import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";

const Navbar = ({isMenuOpen, setIsMenuOpen}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const handleMenu = () => {
    setMenuOpen(!menuOpen)
    setIsMenuOpen(!isMenuOpen)
  }
  const handleNavServices = () => {
    setServicesOpen(!servicesOpen)
  }
  return (
    <div className={styles.Navbar__container}>
      <div className={styles.Navbar__top}>
        <div className={styles.Navbar__top__menuOptions}>
          <button
            className={styles.Navbar__top__burger}
            onClick={handleMenu}
          >
            <Image
              src="/burgerIcon.png"
              alt="Burger menu icon"
              className={styles.Navbar__top__burger__icon}
            />
            Menu
          </button>
        </div>
        {
          menuOpen === true &&
          <button className={styles.Navbar__top__signup}>
            Try it for FREE
          </button>
        }
      </div>
      {
          menuOpen === true &&
          <nav className={styles.Navbar__proper}>
            <ul className={styles.Navbar__proper__list}>
              <li className={styles.Navbar__proper__list__options}>
                <Link href="/">
                  <a
                    className={`
                      ${styles["Navbar__proper__list__options__a"]}
                      ${styles["Navbar__proper__list__options__home"]}
                    `}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className={styles.Navbar__proper__list__options}>
                <ul
                  className={`
                    ${styles["Navbar__proper__list__options__a"]}
                    ${styles["Navbar__proper__list__options__serviceContainer"]}
                  `}
                  onClick={handleNavServices}
                >
                  <p
                    className={`
                    ${styles["Navbar__proper__list__options__services"]}
                  `}
                  >
                    Services
                  </p>
                  {
                    servicesOpen === true &&
                    <div className={styles.Navbar__proper__list__options__services__list}>
                      <li
                        className={`
                          ${styles["Navbar__services"]}
                        `}
                      >
                        <Link href="/">
                          <a>
                            Contract Negotiations
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`
                          ${styles["Navbar__services"]}
                        `}
                      >
                        <Link href="/">
                          <a>
                            Shipping Refunds
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`
                          ${styles["Navbar__services"]}
                        `}
                      >
                        <Link href="/">
                          <a>
                            Lost &amp; Damaged Claims
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`
                          ${styles["Navbar__services"]}
                        `}
                      >
                        <Link href="/">
                          <a>
                            Premium analytics
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`
                          ${styles["Navbar__services"]}
                        `}
                      >
                        <Link href="/">
                          <a>
                            FedEx Ex-Ray
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`
                          ${styles["Navbar__services"]}
                        `}
                      >
                        <Link href="/">
                          <a>
                            Shipping Insurance
                          </a>
                        </Link>
                      </li>
                      <li
                        className={`
                          ${styles["Navbar__services"]}
                        `}
                      >
                        <Link href="/">
                          <a>
                            Amazon FBA Refunds
                          </a>
                        </Link>
                      </li>
                    </div >
                  }


                </ul>
              </li>
              <li className={styles.Navbar__proper__list__options}>
                <Link href="/about">
                  <a
                    className={`
                      ${styles["Navbar__proper__list__options__a"]}
                      ${styles["Navbar__proper__list__options__about"]}
                    `}
                  >
                    About Us
                  </a>
                </Link>
              </li>
              <li className={styles.Navbar__proper__list__options}>
                <Link href="/blogs">
                  <a
                    className={`
                      ${styles["Navbar__proper__list__options__a"]}
                      ${styles["Navbar__proper__list__options__blog"]}
                    `}
                  >
                    Blogs
                  </a>
                </Link>
              </li>
              <li className={styles.Navbar__proper__list__options}>
                <Link href="/contact">
                  <a
                    className={`
                      ${styles["Navbar__proper__list__options__a"]}
                      ${styles["Navbar__proper__list__options__contact"]}
                    `}
                  >
                    Contact Us
                  </a>
                </Link>
              </li>
              <li className={styles.Navbar__proper__list__options}>
                <Link href="/login">
                  <a
                    className={`
                      ${styles["Navbar__proper__list__options__a"]}
                      ${styles["Navbar__proper__list__options__login"]}
                    `}
                  >
                    Log In
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
      }

    </div>
  );
};

export default Navbar;
