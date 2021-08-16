import { Heart, HeartFill } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"

import { toggleLikeSongAction } from "../../redux/actions/actions"

import "./LikeDislikeBtn.css"

const LikeDislikeBtn = props => {
  const likes = useSelector(state => state.likes)
  const dispatch = useDispatch()
  const toggleLikeSong = songId => dispatch(toggleLikeSongAction(songId))

  return (
    <div className="LikeDislikeBtn">
      {likes.songs[props.songId] ? (
        <HeartFill onClick={() => toggleLikeSong(props.songId)} />
      ) : (
        <Heart onClick={() => toggleLikeSong(props.songId)} />
      )}
    </div>
  )
}

export default LikeDislikeBtn
