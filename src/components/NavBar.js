"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIconLinkedin from "../assets/img/nav-icon1.svg";
import navIconFacebook from "../assets/img/nav-icon2.svg";
import navIconInstagram from "../assets/img/nav-icon3.svg";
import navIconGithub from "../assets/img/github-11-16.ico";
import profilePicture from "../assets/img/fota.jpg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="https://dyzioq.github.io/cv_website/">
          <img src={profilePicture} alt="Logo" className="profile-picture" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              // href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("home");
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              // href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("skills");
                navigate("/skills");
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              // href="#experience"
              className={
                activeLink === "Experience"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("experience");
                navigate("/experience");
              }}
            >
              Experience
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pawe%C5%82-dy%C5%9Bko-681367271/">
                {" "}
                <img src={navIconLinkedin} alt="" />{" "}
              </a>

              <a href="https://www.facebook.com/profile.php?id=100006611227224">
                {" "}
                <img src={navIconFacebook} alt="" />{" "}
              </a>

              <a href="https://www.instagram.com/dyzioq/">
                {" "}
                <img src={navIconInstagram} alt="" />{" "}
              </a>

              <a href="https://github.com/dyzioq">
                {" "}
                <img src={navIconGithub} alt="" />{" "}
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
