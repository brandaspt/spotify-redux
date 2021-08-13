import * as types from "../types/types";
import { initialState } from "../store";

const likesReducer = (state = initialState.likes, action) => {
  switch (action.type) {
    case types.LIKE_SONG:
      return { ...state, songs: [...state.songs, action.payload] };

    case types.DISLIKE_SONG:
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== action.payload),
      };

    default:
      return state;
  }
};

export default likesReducer;
