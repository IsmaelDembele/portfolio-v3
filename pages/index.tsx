import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contacts from "../components/Contacts";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Porfolio</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <ul>
          <li className={styles.logo}>Ismael Dembele</li>
          <Link href="/#header" as="/">
            <li>Home</li>
          </Link>
          <Link href="/#projects">
            <li>Projects</li>
          </Link>
          <Link href="/#skills">
            <li>Skills</li>
          </Link>
          <Link href="/#contacts">
            <li>Contacts</li>
          </Link>
        </ul>
      </nav>

      <main>
        <Header />
        <Projects />
        <Skills />
        <Contacts />
      </main>
    </div>
  );
};

export default Home;
