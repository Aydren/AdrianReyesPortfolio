import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="px-5 mx-5">
        <Bio />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
