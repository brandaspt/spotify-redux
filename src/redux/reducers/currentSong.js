import * as types from "../types/types";
import { initialState } from "../store";

const currentSongReducer = (state = initialState.currentSong, action) => {
  switch (action.type) {
    case types.ADD_CURRENT_SONG:
      return { ...state, songObj: action.payload };
    case types.PLAY_SONG:
      return { ...state, playing: true };
    case types.PAUSE_SONG:
      return { ...state, playing: false };
    default:
      return state;
      break;
  }
};

export default currentSongReducer;
