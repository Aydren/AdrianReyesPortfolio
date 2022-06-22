import Container from "react-bootstrap/Container";
import "../App.css";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <div>
      <Nav className="Navi justify-content-center" activeKey="/home">
        <Nav.Item className="nav-item">
          <Nav>About Me</Nav>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav>Skills</Nav>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav>Projects</Nav>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;
