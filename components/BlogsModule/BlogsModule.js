import styles from "./BlogsModule.module.scss";
import BlogPlaceholder from "../../public/PlaceholdersHome/BlogHome.png";
import SocialPlaceholder from "../../public/PlaceholdersHome/SocialHome.png";
import Image from "next/image";

const BlogsModule = () => {
  return (
    <div className={styles.BlogsModule__container}>
      <div className={styles.BlogsModule__Blog}>
        <Image
          src={BlogPlaceholder}
          alt=""
          className={styles.BlogsModule__Blog__Image}
        />
      </div>
      <div className={styles.BlogsModule__Social}>
        <Image
          src={SocialPlaceholder}
          alt=""
          className={styles.BlogsModule__Social__Image}
        />
      </div>
    </div>
  );
};

export default BlogsModule;
