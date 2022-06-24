import "../App.css";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <div className="position-sticky top-0">
      <Nav className="Navi justify-content-center" activeKey="/home">
        <Nav.Item className="nav-item">
          <Nav>Skills</Nav>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav>Projects</Nav>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav>About Me</Nav>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav>Contact</Nav>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav>Resume</Nav>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;
