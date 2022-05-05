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
