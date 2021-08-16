import RAP from "react-audio-player"
import { useSelector } from "react-redux"

const ReactAudioPlayer = () => {
  const currentSong = useSelector(state => state.currentSong)
  return (
    <footer>
      <RAP src={currentSong.songObj.preview} autoPlay controls />
    </footer>
  )
}

export default ReactAudioPlayer
