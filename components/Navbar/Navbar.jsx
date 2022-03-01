import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  let m;
  return (
    <div className={styles.Navbar__container}>
      <div className={styles.Navbar__top}>
        <div className={styles.Navbar__top__menuOptions}>
          <button className={styles.Navbar__top__burger}>Menu</button>
          <button className={styles.Navbar__top__close}>X</button>
        </div>
        <button className={styles.Navbar__top__signup}>Free Sign Up</button>
      </div>
      <nav className={styles.Navbar__proper}>
        <ul className={styles.Navbar__proper__list}>
          <Link href="/" className={styles.Navbar__proper__list__options}>
            <a className={styles.Navbar__proper__list__options__a}>Services</a>
          </Link>
          <Link href="/about" className={styles.Navbar__proper__list__options}>
            <a className={styles.Navbar__proper__list__options__a}>About Us</a>
          </Link>
          <Link href="/blogs" className={styles.Navbar__proper__list__options}>
            <a className={styles.Navbar__proper__list__options__a}>Blogs</a>
          </Link>
          <Link href="/contact" className={styles.Navbar__proper__list__options}>
            <a className={styles.Navbar__proper__list__options__a}>Contact Us</a>
          </Link>
          <Link href="/login" className={styles.Navbar__proper__list__options}>
            <a className={styles.Navbar__proper__list__options__a}>Log In</a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
