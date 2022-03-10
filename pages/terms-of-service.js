import React, { useState } from "react";
import styles from "../styles/Home.module.scss";

import Head from "next/head";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer";

const Terms = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={styles.Terms__container}>
      <Head>
        <title>71lbs | Terms of Service</title>
        {/* Need to change this meta for each page */}
        <meta
          name="71lbs"
          content="Save money and time in FedEx/UPS contract negotiations, late delivery refunds, lost/damaged claims, shipping insurance, and more."
        />
        <link
          rel="icon"
          href="https://71lbs.com/assets/71lbs-26fd13e49a3fdd1927c207274bb782451d57218edf680c4817ef1286c2ffbc28.ico"
        />
        <link
          rel="preload"
          href="/fonts/PROXIMANOVABLACK-WEBFONT.TTF"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PROXIMANOVATHIN-WEBFONT.TTF"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/PROXIMANOVASEMIBOLD-WEBFONT.TTF"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/VERDANA.TTF"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* These styles need to change name but copy styles from homepage */}
      <main
        className={
          isMenuOpen === false
            ? `${styles.Home__main}`
            : `${styles.Home__main__menuOpen}`
        }
      >
        CONTACT US PAGE
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
