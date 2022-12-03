import Image from "next/image";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../public/logo/logo.png";
import banner from "../../public/banner/banner_bg.png"

const Header = () => {
  const styling = {
    backgroundImage: `url('${banner.src}')`,
    backgroundSize: "cover",
    quality: "100",
    layout: "fill",
  };
  return (
    <Container style={styling}>
      <div className="d-flex justify-content-center">
        <Navbar collapseOnSelect expand="lg" className="">
          <Navbar.Brand href="#home">
            <Image
              src={logo}
              alt="Picture of the author"
              //   width="350px"
              //   height="300px"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                {" "}
                <Button variant="warning">Warning</Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      {/* Banner  */}

      <div className="bannerTextPart">
        <p className="navbarPtag">Conference & Exhibition</p>

        <div className="navbarPtag-background">
          <p className="navbarPtagHotal">
            31 August - 1 September 2022 | The Fullerton Hotel Singapore
          </p>
        </div>

        <h1 className="navbarH1Tag">
          Ergonomics & Hygienene <span className="navbarH1TagSpan">2023</span>
        </h1>

        <p className="navbarPtagHealth">Holistic approach to worplace health</p>

        <button className="navbarButtonRegisterPlace">Register Place</button>
      </div>
    </Container>
  );
};

export default Header;
