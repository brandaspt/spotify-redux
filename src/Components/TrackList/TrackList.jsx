import React from "react"
import { secsToMins } from "../../assets/helpers"
import { Col, Row } from "react-bootstrap"
import { connect } from "react-redux"
import { likeSongAction, dislikeSongAction } from "../../redux/actions/actions.js"
import { HeartFill, Heart } from "react-bootstrap-icons"
import PlayPauseBtn from "../PlayPauseButton/PlayPauseBtn"
import "./TrackList.css"

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  likeSong: songObj => dispatch(likeSongAction(songObj)),
  dislikeSong: songId => dispatch(dislikeSongAction(songId)),
})

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
            {likes.songs.find(_track => _track.id === track.id) ? (
              <HeartFill className="heartfill_tracklist" onClick={() => dislikeSong(track.id)} />
            ) : (
              <Heart className="heart_tracklist" onClick={() => likeSong(track)} />
            )}
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

export default connect(mapStateToProps, mapDispatchToProps)(TrackList)
