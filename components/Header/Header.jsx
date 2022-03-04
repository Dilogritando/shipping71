import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

import Navbar from "../Navbar/Navbar.jsx";

const Header = ( {isMenuOpen, setIsMenuOpen} ) => {
  const handleSign = () => {
    console.log("Click on sign")
  }
  const handleLogin = () => {
    console.log("Click on login")
  }
  return (
    <div className={styles.Header__container}>
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <div className={styles.Header__container__logo}>
        <Link href="/" passHref >
          <Image
            src="/71lbs_logo.svg"
            alt="71lbs Logo, a magnifying glass icon over an opened box"
            width={122}
            height={80}
            className={styles.Header__logo}
          />
        </Link>
      </div>
      <div className={styles.Header__buttons}>
          <button
            className={styles.Header__buttons__SignUp}
            onClick={handleSign}
          >
            Sign Up
          </button>
          <button
            className={styles.Header__buttons__Login}
            onClick={handleLogin}
          >
            Log In
          </button>
      </div>
    </div>
  )
}

export default Header
