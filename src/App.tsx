// @ts-ignore
import Header from "./components/Header";
// @ts-ignore
import AboutMe from "./components/AboutMe";
// @ts-ignore
import Technologies from "./components/Technologies";
// @ts-ignore
import Projects from "./components/Projects";
// @ts-ignore
import Contact from "./components/Contact";
// @ts-ignore
import ContactForm from "./components/ContactForm";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="main-container">
      <Header />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
      <ContactForm />
    </div>
  );
};

export default App;

