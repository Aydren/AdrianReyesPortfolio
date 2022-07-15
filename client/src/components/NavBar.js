import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar collapseOnSelect className="Navi fixed-top top-0" variant="dark" expand="sm">
      <Navbar.Brand className="ms-3">Adrian Reyes</Navbar.Brand>
      <Navbar.Toggle aria-controls="Navigation toggle" />
      <Navbar.Collapse>
        <Nav className="justify-content-center w-100">
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
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
