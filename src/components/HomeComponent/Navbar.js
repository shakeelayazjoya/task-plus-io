import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assets/images/logo.png";

function Naavbar() {
  return (
    <Navbar collapseOnSelect expand="md" className="navbar sticky-top">
      <Container className="flex justify-evenly">
        <NavLink to="/"><img className="logo" src={logo} alt="Logo"/></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="nav-items">
            <NavLink to="/" exact className="nav-item" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item" activeClassName="active">
              About us
            </NavLink>
            {/* <NavLink to="/blog" className="nav-item" activeClassName="active">
              Blog
            </NavLink> */}
            <NavLink
              to="/pricing"
              className="nav-item"
              activeClassName="active"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-item mr-3"
              activeClassName="active"
            >
              Contact
            </NavLink>
            <NavLink
              to="https://app.taskplus.io/login"
              className="nav-item mr-3"
              activeClassName="active"
            >
              <div className="header-menu">
                <ul className="main-menu">
                  <div className="header-meta">
                    <div className="header-btn ">
                      <a className="btn btn-4" href="https://app.taskplus.io/login">
                        Login
                      </a>
                    </div>
                  </div>
                </ul>
              </div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naavbar;
