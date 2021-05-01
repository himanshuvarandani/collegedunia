import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import "bootstrap/dist/css/bootstrap.min.css"
import "./Navbar.css"

import cd_logo from "../../Images/cd_logo.png"

const Navbar2 = () => {
  return (
    <Navbar expand="lg" className="pt-0 pb-0">
      <Navbar.Brand href="#home">
        <img src={cd_logo} alt="cd_logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Nav className="mr-right">
          <NavDropdown
            title="B.TECH"
            id="basic-nav-dropdown"
            className="pr-3"
          />
          <NavDropdown title="MBA" id="basic-nav-dropdown" className="pr-3" />
          <NavDropdown title="MBBS" id="basic-nav-dropdown" className="pr-3" />
          <NavDropdown
            title="DESIGN"
            id="basic-nav-dropdown"
            className="pr-3"
          />
          <NavDropdown title="LAW" id="basic-nav-dropdown" className="pr-3" />
          <NavDropdown
            title="SCIENCE"
            id="basic-nav-dropdown"
            className="pr-3"
          />
          <NavDropdown
            title="STUDY ABROAD"
            id="basic-nav-dropdown"
            className="pr-3"
          />
          <NavDropdown
            title="ALL COURSES"
            id="basic-nav-dropdown"
            className="pr-3"
          />
          <FontAwesomeIcon icon={faSearch} size="2x" className="pt-2" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbar2
