import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header__container}>
        <Image
              src="/vercel.svg"
              alt="71lbs Logo, a magnifying glass icon over an opened box"
              width={72}
              height={16}
              className={styles.Header__logo}
            />
        <div className={styles.Header__buttons}>
            <button className={styles.Header__buttons__SignUp}>Sign Up</button>
            <button className={styles.Header__buttons__Login}>Log In</button>
        </div>
    </div>
  )
}

export default Header
