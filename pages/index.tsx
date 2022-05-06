import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contacts from "../components/Contacts";
import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useContext, useEffect } from "react";
import { AppContext } from "../context";

const Home: NextPage = () => {
  const matchesTabPort = useMediaQuery("(max-width:900px)");
  const { drawer, setDrawer, toggleDrawer } = useContext(AppContext);

  useEffect(() => {
    !matchesTabPort && setDrawer(false);
  }, [matchesTabPort, setDrawer]);

  return (
    <div onClick={() => toggleDrawer()}>
      <Head>
        <title>Porfolio</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {matchesTabPort && drawer && <Drawer />}

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
