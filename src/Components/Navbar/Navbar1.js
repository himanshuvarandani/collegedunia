import React from "react"
import { Nav, Navbar } from "react-bootstrap"

import "./Navbar.css"

const Navbar1 = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="pt-0 pl-3 pb-0 navbar1"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="" className="pr-4">
            TOP UNIVERSITIES
          </Nav.Link>
          <Nav.Link href="" className="pr-4">
            TOP COURSES
          </Nav.Link>
          <Nav.Link href="" className="pr-4">
            COLLEGES
          </Nav.Link>
          <Nav.Link href="" className="pr-4">
            EXAMS
          </Nav.Link>
          <Nav.Link href="" className="pr-4">
            REVIEWS
          </Nav.Link>
          <Nav.Link href="" className="pr-4">
            NEWS
          </Nav.Link>
          <Nav.Link href="" className="pr-4">
            ADMISSION 2021
          </Nav.Link>
          <Nav.Link href="" className="pr-4">
            WRITE A REVIEW
          </Nav.Link>
          <Nav.Link href="" className="pr-4">
            TOP COUPONS
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="mr-right">
        <Nav.Link href="">LOGIN</Nav.Link>
        <Nav.Link href="">DOWNLOAD</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Navbar1
