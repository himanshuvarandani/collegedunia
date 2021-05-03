import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

import "./Footer.css"

import appStore from "../../Images/app-store.png"
import collegedunia from "../../Images/collegedunia_logo.png"
import googlePlay from "../../Images/google-play.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-heading">
        <h1>SUBSCRIBE TO OUR NEWS LETTER</h1>
        <p>
          COLLEGE NOTIFICATION &emsp; &emsp; EXAM NOTIFICATION &emsp; &emsp;
          NEWS UPDATE
          {/* <div className="first-dot"></div>
          <div className="second-dot"></div> */}
        </p>
      </div>

      <div className="footer-link-block">
        <div className="container-fluid d-flex flex-row flex-wrap">
          <div className="d-flex flex-column link-block">
            <h4>TOP COLLEGES</h4>
            <p className="hr" />
            <p>M.B.A</p>
            <p>B.TECH/B.E</p>
            <p>MCA</p>
            <p>BCA</p>
            <p>M.TECH</p>
            <p>BA</p>
            <p>MA</p>
          </div>

          <div className="d-flex flex-column link-block">
            <h4>TOP UNIVERSITIES</h4>
            <p className="hr" />
            <p>ENGINEERING</p>
            <p>MANAGEMENT</p>
            <p>MEDICAL</p>
            <p>LAW</p>
            <p>COMMERCE</p>
            <p>SCIENCE</p>
            <p>ARTS</p>
          </div>

          <div className="d-flex flex-column link-block">
            <h4>TOP EXAMS</h4>
            <p className="hr" />
            <p>CAT</p>
            <p>GATE</p>
            <p>JEE-MAIN</p>
            <p>NEET</p>
            <p>XAT</p>
            <p>CLAT</p>
            <p>MAT</p>
          </div>

          <div className="d-flex flex-row">
            <div className="d-flex flex-column link-block">
              <h4>STUDY ABROAD</h4>
              <p className="hr" />
              <p>CANADA</p>
              <p>USA</p>
              <p>UK</p>
              <p>AUSTRALIA</p>
              <p>GERMANY</p>
              <p>SWEDEN</p>
            </div>

            <div className="d-flex flex-column link-block">
              <br />
              <br />
              <p>IRELAND</p>
              <p>NEW ZEALAND</p>
              <p>HONG KONG</p>
              <p>SINGAPORE</p>
              <p>MALAYSIA</p>
              <p>NETHERLANDS</p>
            </div>
          </div>

          <div className="d-flex flex-column link-block">
            <h4>OTHER LINKS</h4>
            <p className="hr" />
            <p>
              ABOUT
              <br />
              COLLEGEDUNIA
            </p>
            <p>CONTACT US</p>
            <p>ADVERTISING</p>
            <p>CAREERS</p>
            <p>
              TERMS AND
              <br />
              CONDITIONS
            </p>
          </div>
        </div>
      </div>

      <div className="app-section container-fluid row">
        <div className="col-sm-3 label">
          <h5>Download the Collegedunia app on</h5>
        </div>

        <div className="col-md-5 col-sm-4 app-img">
          <img src={googlePlay} alt="Google Play" />
          <img src={appStore} alt="App Store" />
        </div>

        <div className="col-md-4 col-sm-5 app-share">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <FontAwesomeIcon icon={faYoutube} size="2x" />
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </div>
      </div>

      <div className="copyright-block">
        <img src={collegedunia} alt="Collegedunia.com" />
        <p>COPYRIGHT © 2021 COLLEGEDUNIA WEB PVT. LTD. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  )
}

export default Footer
