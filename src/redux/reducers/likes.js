import * as types from "../types/types"
import { initialState } from "../store"

const likesReducer = (state = initialState.likes, action) => {
  switch (action.type) {
    case types.TOGGLE_LIKE_SONG:
      const isLiked = state.songs[action.payload]
      return { ...state, songs: { ...state.songs, [action.payload]: !isLiked } }

    default:
      return state
  }
}

export default likesReducer
