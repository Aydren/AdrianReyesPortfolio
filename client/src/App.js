import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="px-5 mx-5">
        <section>
          <Bio />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <hr />
        <section id="projects">
          <Projects />
        </section>
        <hr />
        <section id="about-me">
          <AboutMe />
        </section>
        <hr />
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
