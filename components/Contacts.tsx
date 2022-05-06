import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import styles from "../styles/Contacts.module.scss";

const Contacts = () => {
  return (
    <section id="contacts" className={styles.contacts}>
      <h1>Contacts</h1>
      <div className={styles["contacts--container"]}>
        <p className={styles["contacts--description"]}>
          Feel free to contact me if you need any additional information. <br />
          dembele.ismael at gmail.com
        </p>
        <div className={styles["contacts--items"]}>
          <a href="https://github.com/IsmaelDembele" target="_blank" rel="noreferrer">
            <GitHubIcon sx={{ fontSize: 30, cursor: "pointer" }} />
          </a>
          <a href="mailto:dembele.ismael@gmail.com">
            <EmailIcon sx={{ fontSize: 30, cursor: "pointer" }} />
          </a>
          <a href="/Resume.pdf" target="_blank" rel="noreferrer">
            <ContactPageIcon sx={{ fontSize: 30, cursor: "pointer" }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
