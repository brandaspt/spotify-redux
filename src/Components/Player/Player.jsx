import { useEffect, useRef, useState } from "react"
import { Row, Col } from "react-bootstrap"
import {
  ArrowRepeat,
  PauseFill,
  PlayFill,
  Shuffle,
  SkipBackwardFill,
  SkipForwardFill,
  VolumeMuteFill,
  VolumeUpFill,
} from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import { pauseSongAction, playSongAction } from "../../redux/actions/actions"

import { secsToMins } from "../../assets/helpers"
import LikeDislikeBtn from "../LikeDislikeBtn/LikeDislikeBtn"

import "./Player.css"

const Player = () => {
  const [audioDuration, setAudioDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(localStorage.getItem("volume") || 0.5)
  const currentSong = useSelector(state => state.currentSong)
  const dispatch = useDispatch()
  const pauseSong = () => dispatch(pauseSongAction())
  const playSong = () => dispatch(playSongAction())
  const audioRef = useRef()
  useEffect(() => {
    currentSong.playing ? audioRef.current.play() : audioRef.current.pause()
  }, [currentSong])

  useEffect(() => {
    localStorage.setItem("volume", volume)
    audioRef.current.volume = volume
  }, [volume])

  return (
    <footer className="player">
      <Row className="border-top border-secondary h-100">
        <Col className="d-flex align-items-center justify-content-between" xs={3}>
          <div className="track-info d-flex align-items-center">
            <div className="d-flex align-items-center p-2">
              <img
                src={currentSong.songObj.album?.cover_small ? currentSong.songObj.album.cover_small : "https://via.placeholder.com/150"}
                width="50px"
                alt=""
              />

              <div className="text-white">
                <p className="font-weight-bold">{currentSong.songObj.title ? currentSong.songObj.title : "Track Name"}</p>
                <p>{currentSong.songObj.artist?.name ? currentSong.songObj.artist.name : "Artist"}</p>
              </div>
            </div>
          </div>
          <LikeDislikeBtn songId={currentSong.songObj.id} />
        </Col>
        <Col xs={6}>
          <div className="controls d-flex flex-column h-100">
            <div className="d-flex justify-content-center align-items-center">
              <Shuffle />
              <SkipBackwardFill />
              <div className="d-flex justify-content-center align-items-center" id="player-play-pause-btn">
                {currentSong.playing ? <PauseFill onClick={pauseSong} /> : <PlayFill onClick={playSong} />}
              </div>
              <SkipForwardFill />
              <ArrowRepeat />
            </div>
            <div id="time-controller" className="d-flex align-items-center justify-content-center">
              <span>{secsToMins(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={audioDuration}
                value={currentTime}
                step="1"
                onChange={e => {
                  setCurrentTime(e.target.value)
                  audioRef.current.currentTime = e.target.value
                }}
              />
              <span>{secsToMins(audioDuration)}</span>
            </div>
          </div>
        </Col>
        <Col xs={3}>
          <div className="extra-controls h-100 d-flex align-items-center justify-content-center">
            {!volume ? <VolumeMuteFill /> : <VolumeUpFill onClick={() => setVolume(0)} />}
            <input
              id="volume-range"
              min={0}
              max={1}
              step={0.1}
              value={volume}
              onChange={e => {
                setVolume(e.target.value)
              }}
              className="ml-2"
              type="range"
            />
          </div>
        </Col>
      </Row>
      <audio
        className="w-100"
        src={currentSong.songObj.preview}
        ref={audioRef}
        onEnded={() => {
          pauseSong()
          setCurrentTime(0)
        }}
        onLoadedData={e => setAudioDuration(e.target.duration)}
        onTimeUpdate={e => setCurrentTime(e.target.currentTime)}
      ></audio>
    </footer>
  )
}

export default Player
