import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import React, { useState } from "react";

import Header from "../components/Header/Header.jsx";
import MainHomeMarch2022 from "../components/MainHome/MainHomeMarch2022.js";
import FeelingsHome from "../components/FeelingsHome/FeelingsHome.js";
import ServicesSlider from "../components/ServicesSlider/ServicesSlider.js";
import LoginHome from "../components/LoginHome/LoginHome";
import BrandsGallery from "../components/BrandsGallery/BrandsGallery";
import TestimonialSlider from "../components/TestimonialSlider/TestimonialSlider";
import FactsFigures from "../components/FactsFigures/FactsFigures";
import Calculator from "../components/Calculator/Calculator";
import BlogsModule from "../components/BlogsModule/BlogsModule";
import SocialMediaModule from "../components/SocialMediaModule/SocialMediaModule";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={styles.Home__container}>
      <Head>
        <title>
          71lbs | Contract Negotiations | FedEx &amp; UPS Shipping Refunds{" "}
        </title>
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

      <main
        className={
          isMenuOpen === false
            ? `${styles.Home__main}`
            : `${styles.Home__main__menuOpen}`
        }
      >
        <MainHomeMarch2022 /> 
        <FeelingsHome /> 
        <ServicesSlider /> 
        <LoginHome /> 
        <BrandsGallery /> 
        <TestimonialSlider /> 
        <FactsFigures /> 
        <Calculator /> {/* Pending - Calculator script?*/}
        {/* <BlogsModule /> */} {/* Pending - Last -- will need permissions*/}
        {/* <SocialMediaModule /> */}
      </main>

      <Footer />
    </div>
  );
}
