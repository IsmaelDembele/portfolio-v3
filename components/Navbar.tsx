import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { style } from "@mui/system";
import { useContext } from "react";
import { AppContext } from "../context";

const Navbar = () => {
  const { toggleDrawer } = useContext(AppContext);

  return (
    <nav>
      <ul>
        <li className={styles.logo}>
          <p>Ismael Dembele</p>
        </li>
        <Link href="/#header" as="/" passHref>
          <li>Home</li>
        </Link>
        <Link href="/#projects" passHref>
          <li>Projects</li>
        </Link>
        <Link href="/#skills" passHref>
          <li>Skills</li>
        </Link>
        <Link href="/#contacts" passHref>
          <li>Contacts</li>
        </Link>
        <li className={styles.menu} onClick={() => toggleDrawer()}>
          <MenuIcon sx={{ fontSize: 25 }} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
