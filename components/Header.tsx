import styles from "../styles/header.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Image from "next/image";
import picture from "../public/picture.jpg";

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles["header--box"]}>
        <div className={styles["header--left"]}>
          <div className={styles["header--text"]}>
            <p> I am Ismael Dembele </p>
            <p>a full stact developper</p>
            <p>based in Pittsburgh, PA</p>
          </div>
          <div className={styles["header--social"]}>
            <a href="https://github.com/IsmaelDembele" target="_blank" rel="noreferrer">
              <GitHubIcon sx={{ fontSize: 25, cursor: "pointer" }} />
            </a>
            <a href="mailto:dembele.ismael@gmail.com">
              <EmailIcon sx={{ fontSize: 25, cursor: "pointer" }} />
            </a>
            <a href="/Resume.pdf" target="_blank" rel="noreferrer">
              <ContactPageIcon sx={{ fontSize: 25, cursor: "pointer" }} />
            </a>
          </div>
        </div>
        <div className={styles["header--right"]}>
          <Image
            src={picture}
            alt="Picture of the laptop"
            // layout="responsive"
            layout="fixed"
            width={300}
            height={400}
            className={styles.img}
            priority
            placeholder="blur"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
