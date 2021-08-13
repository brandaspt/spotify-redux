import * as types from "../types/types";
import { initialState } from "../store";

const likesReducer = (state = initialState.likes, action) => {
  switch (action.type) {
    case types.LIKE_SONG:
      return { ...state, songs: [...state.songs, action.payload] };

    case types.DISLIKE_SONG:
      const modifiedFavs = [
        { ...state.songs.filter((song) => song.id !== action.payload.id) },
      ];
      return { ...state, songs: modifiedFavs };
    default:
      return state;
  }
};

export default likesReducer;
