import { PauseFill, PlayFill } from "react-bootstrap-icons"
import { connect } from "react-redux"
import { addCurrentSongAction, pauseSongAction, playSongAction } from "../../redux/actions/actions"

import "./PlayPauseBtn.css"

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  addCurrentSong: songObj => dispatch(addCurrentSongAction(songObj)),
  playSong: () => dispatch(playSongAction()),
  pauseSong: () => dispatch(pauseSongAction()),
})

const PlayPauseBtn = ({ currentSong, songObj, pauseSong, playSong, addCurrentSong }) => {
  const isPlaying = currentSong.playing && currentSong.songObj.id === songObj.id
  return (
    <div className={isPlaying ? "playing" : ""} id="PlayPauseBtn">
      {isPlaying ? (
        <PauseFill onClick={pauseSong} />
      ) : (
        <PlayFill
          onClick={() => {
            addCurrentSong(songObj)
            playSong()
          }}
        />
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayPauseBtn)
