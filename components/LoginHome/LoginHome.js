import styles from "./LoginHome.module.scss";
import LoginPlaceholder from "../../public/PlaceholdersHome/LoginHome.png";
import Image from "next/image";

const LoginHome = () => {
  let LoginPlaceholder2 = LoginPlaceholder;
  return (
    <div className={styles.LoginHome__container}>
      <Image
        src={LoginPlaceholder2}
        alt=""
        className={styles.LoginHome__image}
      />
      <div className={styles.LoginHome__Steps}></div>
      <div className={styles.LoginHome__Form}></div>
    </div>
  );
};

export default LoginHome;
