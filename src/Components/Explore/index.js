import React from "react"
import { Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBookOpen,
  faEdit,
  faFileCode,
  faFolder,
  faNewspaper,
  faSearchPlus,
  faSign,
  faSignInAlt,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons"

import "./Explore.css"

const ExploreFeatures = () => {
  return (
    <div className="explore container-fluid">
      <div className="section-header">
        <h1>EXPLORE ALMOST EVERYTHING</h1>
        <p className="text-md">
          Collegedunia.com is an extensive search engine for the students,
          parents,
          <br />
          and education industry players who are seeking information
        </p>
      </div>
      <div className="explore-features-list text-center d-flex flex-wrap">
        <Card style={{ width: "20rem" }}>
          <FontAwesomeIcon
            className="card-image-top"
            icon={faUniversity}
            size="6x"
          />
          <Card.Body>
            <Card.Title>FIND BEST COLLEGE</Card.Title>
            <Card.Text>Learn about best of the bests in the country.</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <FontAwesomeIcon className="card-image-top" icon={faEdit} size="6x" />
          <Card.Body>
            <Card.Title>EXPLORE EXAMS</Card.Title>
            <Card.Text>
              All information about the exams that will get you into your dream
              college.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <FontAwesomeIcon
            className="card-image-top"
            icon={faNewspaper}
            size="6x"
          />
          <Card.Body>
            <Card.Title>GET LATEST NEWS</Card.Title>
            <Card.Text>
              Stay informed about the latest happenings to map your higher
              studies.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <FontAwesomeIcon
            className="card-image-top"
            icon={faFileCode}
            size="6x"
          />
          <Card.Body>
            <Card.Title>TOP REVIEWS</Card.Title>
            <Card.Text>
              Know what others have to say about the colleges you are searching.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <FontAwesomeIcon
            className="card-image-top"
            icon={faFolder}
            size="6x"
          />
          <Card.Body>
            <Card.Title>TOP COURSES</Card.Title>
            <Card.Text>
              Learn about various mix of courses offered across the country.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <FontAwesomeIcon
            className="card-image-top"
            icon={faSignInAlt}
            size="6x"
          />
          <Card.Body>
            <Card.Title>GET ADMISSION</Card.Title>
            <Card.Text>Find information about the final steps</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <FontAwesomeIcon
            className="card-image-top"
            icon={faSearchPlus}
            size="6x"
          />
          <Card.Body>
            <Card.Title>RANK PREDICTOR</Card.Title>
            <Card.Text>
              Predict your rank based on expected/actual score by collegedunia
              Rank Predictor
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <FontAwesomeIcon
            className="card-image-top"
            icon={faBookOpen}
            size="6x"
          />
          <Card.Body>
            <Card.Title>EDUCATION LOAN</Card.Title>
            <Card.Text>
              Check eligibility and apply for financial assistance for your
              higher education.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "20rem" }}>
          <FontAwesomeIcon
            className="card-image-top"
            icon={faFileCode}
            size="6x"
          />
          <Card.Body>
            <Card.Title>WRITE A REVIEW</Card.Title>
            <Card.Text>We will love to hear from you.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default ExploreFeatures
