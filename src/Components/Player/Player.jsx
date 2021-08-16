import { Button } from "react-bootstrap"
import { useEffect, useRef } from "react"
import ReactAudioPlayer from "react-audio-player"
import { Row, Col } from "react-bootstrap"
import { connect } from "react-redux"

import LikeDislikeBtn from "../LikeDislikeBtn/LikeDislikeBtn"

import "./Player.css"

const mapStateToProps = state => state

const Player = ({ currentSong }) => {
  const audioRef = useRef()
  useEffect(() => {
    currentSong.playing ? audioRef.current.play() : audioRef.current.pause()
  }, [currentSong])
  return (
    <footer className="player">
      <Row className="border-top border-secondary">
        <Col xs={3}>
          <div className="track-info d-flex align-items-center justify-content-between p-2">
            <div className="d-flex align-items-center p-2">
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
            <LikeDislikeBtn songId={currentSong.songObj.id} />
          </div>
        </Col>
        <Col xs={6}>
          <div className="controls d-flex justify-content-center align-items-center h-100">
            <audio className="w-100" src={currentSong.songObj.preview} ref={audioRef} controls></audio>
          </div>
        </Col>
        <Col xs={3}>
          <div className="extra-controls"></div>
        </Col>
      </Row>
    </footer>
  )
}

export default connect(mapStateToProps)(Player)
