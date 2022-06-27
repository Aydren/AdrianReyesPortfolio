import "../App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
      <Navbar className="Navi position-sticky" variant="dark">
        <Nav className="justify-content-center w-100" activeKey="/home">
          <Nav.Item className="mx-2">
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link href="#about-me">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item className="mx-2">
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
  );
}

export default NavBar;
