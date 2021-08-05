import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
