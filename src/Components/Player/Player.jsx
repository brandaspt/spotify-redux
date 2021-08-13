import React from "react"
import { Row, Col } from "react-bootstrap"
import { connect } from "react-redux"

import "./Player.css"

const mapStateToProps = state => state

const Player = ({ currentSong }) => {
  return (
    <footer className="player">
      <Row className="border-top border-secondary">
        <Col xs={3}>
          <div className="track-info d-flex align-items-center p-2">
            <img
              src={currentSong.songObj.album?.cover_small ? currentSong.songObj.album.cover_small : "https://via.placeholder.com/150"}
              width="50px"
              alt=""
            />

            <div className="d-flex flex-column text-white">
              <p className="font-weight-bold">{currentSong.songObj.title ? currentSong.songObj.title : "Track Name"}</p>
              <p>{currentSong.songObj.artist?.name ? currentSong.songObj.artist.name : "Artist"}</p>
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

export default connect(mapStateToProps)(Player)
