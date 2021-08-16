import * as types from "../types/types"
import { initialState } from "../store"

const currentSongReducer = (state = initialState.currentSong, action) => {
  switch (action.type) {
    case types.ADD_CURRENT_SONG:
      return { ...state, songObj: action.payload }
    case types.PLAY_SONG:
      return { ...state, playing: true }
    case types.PAUSE_SONG:
      return { ...state, playing: false }
    case types.SET_DURATION:
      return { ...state, duration: action.payload }
    case types.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload }
    case types.SET_VOLUME:
      return { ...state, volume: action.payload }
    default:
      return state
  }
}

export default currentSongReducer
