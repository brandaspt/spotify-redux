import React from "react"
import { Row, Col } from "react-bootstrap"

import "./Player.css"

function Player(props) {
  return (
    <footer className="player">
      <Row className="border-top border-secondary">
        <Col xs={3}>
          <div className="track-info d-flex align-items-center p-2">
            <img src="https://via.placeholder.com/150" width="50px" alt="" />

            <div className="d-flex flex-column text-white">
              <p className="font-weight-bold">Track Name</p>
              <p>Artist</p>
            </div>
          </div>
        </Col>
        <Col xs={6}>
          <div className="controls"></div>
        </Col>
        <Col xs={3}>
          <div className="extra-controls"></div>
        </Col>
      </Row>
    </footer>
  )
}

export default Player
