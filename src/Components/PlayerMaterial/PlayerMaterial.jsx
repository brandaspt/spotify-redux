import { useSelector } from "react-redux"

// import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import AudioPlayer from "material-ui-audio-player"

import "./PlayerMaterial.css"

const PlayerMaterial = () => {
  // const dispatch = useDispatch()
  const currentSong = useSelector(state => state.currentSong)

  return (
    <footer className="player">
      <AudioPlayer
        autoplay={true}
        elevation={1}
        variation="primary"
        download={false}
        loop={true}
        debug={false}
        src={currentSong.songObj.preview}
      />
    </footer>
  )
}

export default PlayerMaterial
