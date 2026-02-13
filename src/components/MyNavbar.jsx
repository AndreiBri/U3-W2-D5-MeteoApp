import "./MyNavbar.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/weather-cloud-sun-rain-lightning-logo-design-symbol-icon-template_23729-1790.avif";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="py-0">
      <Container fluid>
        <Link to="/" className="navbar-brand d-flex align-items-center ">
          <img src={logo} alt="MeteoLogo" />
          <p className="mb-0 ms-2">EpiMeteo</p>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/previsioni" className="nav-link">
              Previsioni
            </Link>
            <Nav.Link href="#action2">Situazioni</Nav.Link>
            <Nav.Link href="#action2">Venti e Mari</Nav.Link>
          </Nav>
          <Form className="d-flex ">
            <Button className="bg-light text-black">Accedi</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <hr />
    </Navbar>
  );
}

export default MyNavbar;
