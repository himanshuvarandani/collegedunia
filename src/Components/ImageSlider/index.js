import React from "react"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import { Form, Button, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import "react-awesome-slider/dist/styles.css"
import "react-awesome-slider/dist/captioned.css"
import "./ImageSlider.css"

import image1 from "../../Images/Image1.jpg"
import image2 from "../../Images/Image2.jpg"
import image3 from "../../Images/Image3.jpg"

const AutoplaySlider = withAutoplay(AwesomeSlider)

const ImageSlider = () => {
  return (
    <div>
      <AutoplaySlider
        organicArrows={false}
        bullets={false}
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        media={[{ source: image1 }, { source: image2 }, { source: image3 }]}
      />
      <div className="first d-flex flex-column">
        <h1 className="heading">FIND OVER IN INDIA</h1>
        <Form>
          <Form.Group>
            <Form.Row>
              <Col xs={10} className="p-0">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Search"
                  className="search"
                />
              </Col>
              <Col className="fontButton">
                <FontAwesomeIcon icon={faChevronRight} size="2x" />
              </Col>
            </Form.Row>
          </Form.Group>
        </Form>
        <p className="text-h2">Have Plans To Study In USA?</p>
        <Button className="readButton">Read More</Button>
      </div>
    </div>
  )
}

export default ImageSlider
