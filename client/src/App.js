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
    <div>
      <NavBar />
      <section id="bio">
        <Bio />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

/* <BrowserRouter>
    <Routes>
    <Route path="/resume" element={<Resume />} />
    </Routes>
    </BrowserRouter>
 */

export default App;
