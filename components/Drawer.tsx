import Link from "next/link";
import React, { useContext } from "react";
import { AppContext } from "../context";
import styles from "../styles/drawer.module.scss";
import Navbar from "./Navbar";

const Drawer = () => {
  const { toggleDrawer } = useContext(AppContext);

  return (
    <div className={styles.drawer}>
      <Link href="/#header" as="/" passHref>
        <div className={styles["drawer--item"]} onClick={() => toggleDrawer()}>
          Home
        </div>
      </Link>
      <Link href="/#projects" passHref>
        <div className={styles["drawer--item"]} onClick={() => toggleDrawer()}>
          Projects
        </div>
      </Link>
      <Link href="/#skills" passHref>
        <div className={styles["drawer--item"]} onClick={() => toggleDrawer()}>
          Skills
        </div>
      </Link>
      <Link href="/#contacts" passHref>
        <div className={styles["drawer--item"]} onClick={() => toggleDrawer()}>
          Contacts
        </div>
      </Link>
    </div>
  );
};

export default Drawer;
