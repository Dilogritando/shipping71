import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const NavbarLaptop = ({isMenuOpen, setIsMenuOpen}) => {
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
    <div className={styles.NavbarLaptop__container}>
        <nav className={styles.NavbarLaptop__proper}>
        <ul className={styles.NavbarLaptop__proper__list}>
            <li className={styles.NavbarLaptop__proper__list__options}>
            <Link href="/">
                <a
                className={`
                    ${styles["NavbarLaptop__proper__list__options__a"]}
                    ${styles["NavbarLaptop__proper__list__options__home"]}
                `}
                >
                Home
                </a>
            </Link>
            </li>
            <li className={styles.NavbarLaptop__proper__list__options}>
            <ul
                className={`
                ${styles["NavbarLaptop__proper__list__options__a"]}
                ${styles["NavbarLaptop__proper__list__options__serviceContainer"]}
                `}
                onClick={handleNavServices}
            >
                <p
                className={`
                ${styles["NavbarLaptop__proper__list__options__services"]}
                `}
                >
                Services
                </p>
                {
                servicesOpen === true &&
                <div className={styles.NavbarLaptop__proper__list__options__services__list}>
                    <li
                    className={`
                        ${styles["NavbarLaptop__services"]}
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
                        ${styles["NavbarLaptop__services"]}
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
                        ${styles["NavbarLaptop__services"]}
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
                        ${styles["NavbarLaptop__services"]}
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
                        ${styles["NavbarLaptop__services"]}
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
                        ${styles["NavbarLaptop__services"]}
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
                        ${styles["NavbarLaptop__services"]}
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
            <li className={styles.NavbarLaptop__proper__list__options}>
            <Link href="/about">
                <a
                className={`
                    ${styles["NavbarLaptop__proper__list__options__a"]}
                    ${styles["NavbarLaptop__proper__list__options__about"]}
                `}
                >
                About Us
                </a>
            </Link>
            </li>
            <li className={styles.NavbarLaptop__proper__list__options}>
            <Link href="/blogs">
                <a
                className={`
                    ${styles["NavbarLaptop__proper__list__options__a"]}
                    ${styles["NavbarLaptop__proper__list__options__blog"]}
                `}
                >
                Blogs
                </a>
            </Link>
            </li>
            <li className={styles.NavbarLaptop__proper__list__options}>
            <Link href="/contact">
                <a
                className={`
                    ${styles["NavbarLaptop__proper__list__options__a"]}
                    ${styles["NavbarLaptop__proper__list__options__contact"]}
                `}
                >
                Contact Us
                </a>
            </Link>
            </li>
            <li className={styles.NavbarLaptop__proper__list__options}>
            <Link href="/login">
                <a
                className={`
                    ${styles["NavbarLaptop__proper__list__options__a"]}
                    ${styles["NavbarLaptop__proper__list__options__login"]}
                `}
                >
                Log In
                </a>
            </Link>
            </li>
        </ul>
        </nav>
    </div>
  );
};

export default NavbarLaptop;
