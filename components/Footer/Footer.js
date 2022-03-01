import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className="Footer__container">
      <div className="Footer__top">
        <div className="Footer__top--services">
          <h4>Service Directory</h4>
          <ul className="Footer__list">
            <li className="Footer__list__options">
              <Link href="/" className="Navbar--proper--list__options">
                <a>Contract Negotiations</a>
              </Link>
            </li>
            <li className="Footer__list__options">
              <Link href="/" className="Navbar--proper--list__options">
                <a>Shipping Refunds</a>
              </Link>
            </li>
            <li className="Footer__list__options">
              <Link href="/" className="Navbar--proper--list__options">
                <a>Lost &amp; Damaged Claims</a>
              </Link>
            </li>
            <li className="Footer__list__options">
              <Link href="/" className="Navbar--proper--list__options">
                <a>Amazon FBA</a>
              </Link>
            </li>
            <li className="Footer__list__options">
              <Link href="/" className="Navbar--proper--list__options">
                <a>Shipping Insurance</a>
              </Link>
            </li>
            <li className="Footer__list__options">
              <Link href="/" className="Navbar--proper--list__options">
                <a>FedEx Ex-Ray</a>
              </Link>
            </li>
            <li className="Footer__list__options">
              <Link href="/" className="Navbar--proper--list__options">
                <a>Premium Shipping Analytics</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="Footer__top--Company">
          <h4>Company</h4>
          <ul className="Footer__list">
            <li className="Footer__list__options">
              <Link href="/" className="Navbar--proper--list__options">
                <a>About Us</a>
              </Link>
            </li>
            <li className="Footer__list__options">
              <Link href="/" className="Navbar--proper--list__options">
                <a>Meet the Team</a>
              </Link>
            </li>
            <li className="Footer__list__options">
              <Link href="/" className="Navbar--proper--list__options">
                <a>Testimonials</a>
              </Link>
            </li>
            <li className="Footer__list__options">
              <Link href="/" className="Navbar--proper--list__options">
                <a>Blogs</a>
              </Link>
            </li>
            <li className="Footer__list__options">
              <Link href="/" className="Navbar--proper--list__options">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li className="Footer__list__options">
              <Link href="/" className="Navbar--proper--list__options">
                <a>Terms of Service</a>
              </Link>
            </li>
            <li className="Footer__list__options">
              <Link href="/" className="Navbar--proper--list__options">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="Footer__bottom">
        <div className="Footer__bottom--logo">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </div>
        <div className="Footer__bottom--social">
          <h4>Follow</h4>
          <div className="socialIcons">
            <Image
              src="/vercel.svg"
              alt="Link to 71lbs Facebook page"
              width={72}
              height={16}
            />
            <Image
              src="/vercel.svg"
              alt="Link to 71lbs Instagram page"
              width={72}
              height={16}
            />
            <Image
              src="/vercel.svg"
              alt="Link to 71lbs LinkedIn page"
              width={72}
              height={16}
            />
            <Image
              src="/vercel.svg"
              alt="Link to 71lbs Twitter page"
              width={72}
              height={16}
            />
          </div>
        </div>
      </div>
      <p>2022 © 71lbs, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
