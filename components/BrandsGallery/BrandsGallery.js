import styles from "./BrandsGallery.module.scss";
import Image from "next/image";
import AdamsApple_Logo from "../../public/BrandsLogos/AdamsApple_Logo.png";
import BloomsyBox_Logo from "../../public/BrandsLogos/BloomsyBox_Logo.png";
import GetMaineLobster_Logo from "../../public/BrandsLogos/GetMaineLobster_Logo.png";
import Kitsch_Logo from "../../public/BrandsLogos/Kitsch_Logo.png";
import OscarDeLaRenta_Logo from "../../public/BrandsLogos/OscarDeLaRenta_Logo.png";
import PickleBallCentral_Logo from "../../public/BrandsLogos/PickleBallCentral_Logo.png";
import Quickbooks_Logo from "../../public/BrandsLogos/Quickbooks_Logo.png";
import Sonnys_Logo from "../../public/BrandsLogos/Sonnys_Logo.png";
import Tatcha_Logo from "../../public/BrandsLogos/Tatcha_Logo.png";

const BrandsGallery = () => {
  return (
    <div className={styles.BrandsGallery__container}>
      <h2 className={styles.BrandsGallery__title}>
        Trusted by leading brands and savvy professionals
      </h2>
      {/* <Image
        src={TestimonialsPlaceholder}
        alt=""
        className={styles.BrandsGallery__image}
      /> */}
      <div className={styles.BrandsGallery__logosContainer}>
        <div className={styles.BrandsGallery__logosContainer__lineOne}>
          <div className={styles.BrandsGallery__logosContainer__individual}>
            <Image
              src={PickleBallCentral_Logo}
              alt="PickleBall Central Logo"
              className={styles.BrandsGallery__image}
              width={186}
              hight={75}
            />
          </div>

          <div className={styles.BrandsGallery__logosContainer__individual}>
            <Image
              src={Quickbooks_Logo}
              alt="Quickbooks Logo"
              className={styles.BrandsGallery__image}
              width={267}
              hight={52}
            />
          </div>

          <div className={styles.BrandsGallery__logosContainer__individual}>
            <Image
              src={OscarDeLaRenta_Logo}
              alt="Oscar de la Renta Logo"
              className={styles.BrandsGallery__image}
              width={288}
              hight={42}
            />
          </div>

          <div className={styles.BrandsGallery__logosContainer__individual}>
            <Image
              src={Tatcha_Logo}
              alt="Tatcha Logo"
              className={styles.BrandsGallery__image}
              width={269}
              hight={44}
            />
          </div>

          <div className={styles.BrandsGallery__logosContainer__individual}>
            <Image
              src={BloomsyBox_Logo}
              alt="Bloomsy Box Logo"
              className={styles.BrandsGallery__image}
              width={195}
              hight={46}
            />
          </div>
        </div>
        <div className={styles.BrandsGallery__logosContainer__lineTwo}>
          <div className={styles.BrandsGallery__logosContainer__individual}>
            <Image
              src={GetMaineLobster_Logo}
              alt="Get Maine Lobster"
              className={styles.BrandsGallery__image}
              width={159}
              hight={73}
            />
          </div>

          <div className={styles.BrandsGallery__logosContainer__individual}>
            <Image
              src={AdamsApple_Logo}
              alt="Addam's Apple Logo"
              className={styles.BrandsGallery__image}
              width={117}
              hight={117}
            />
          </div>

          <div className={styles.BrandsGallery__logosContainer__individual}>
            <Image
              src={Kitsch_Logo}
              alt="Kitsch Logo"
              className={styles.BrandsGallery__image}
              width={247}
              hight={50}
            />
          </div>

          <div className={styles.BrandsGallery__logosContainer__individual}>
            <Image
              src={Sonnys_Logo}
              alt="Sonny's Logo"
              className={styles.BrandsGallery__image}
              width={260}
              hight={68}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsGallery;
