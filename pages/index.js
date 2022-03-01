import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Navbar from "../components/Navbar/Navbar.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer";

export default function Home() {
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

      <Navbar />
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </div>
      </main>

      <Footer />
    </div>
  );
}
