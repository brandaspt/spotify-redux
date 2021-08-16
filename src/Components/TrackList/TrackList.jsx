import React from "react"
import { secsToMins } from "../../assets/helpers"
import { Col, Row } from "react-bootstrap"
import PlayPauseBtn from "../PlayPauseButton/PlayPauseBtn"
import "./TrackList.css"
import LikeDislikeBtn from "../LikeDislikeBtn/LikeDislikeBtn"

const TrackList = ({ likes, currentSong, likeSong, dislikeSong, tracks }) => {
  return (
    <section className="tracklist-section">
      <Row className="my-3 text-muted">
        <Col className="text-center" md={1}>
          #
        </Col>
        <Col md={10}>TITLE</Col>
        <Col className="text-center" md={1}>
          <i className="far fa-clock"></i>
        </Col>
      </Row>
      {tracks.map((track, i) => (
        <Row key={track.id} className="py-2 text-white">
          <Col className="text-center" md={1}>
            <p className="mx-2 my-0 text-muted">{i + 1}</p>
          </Col>
          <Col md={8}>
            <p className="my-0">{track.title}</p>
          </Col>
          <Col md={1}>
            <LikeDislikeBtn songId={track.id} />
          </Col>
          <Col md={1}>
            <PlayPauseBtn songObj={track} />
          </Col>
          <Col className="text-center" md={1}>
            <p className="my-0 text-muted">{secsToMins(track.duration)}</p>
          </Col>
        </Row>
      ))}
    </section>
  )
}

export default TrackList
