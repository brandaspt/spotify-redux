import * as types from "../types/types"

export const toggleLikeSongAction = songId => ({
  type: types.TOGGLE_LIKE_SONG,
  payload: songId,
})

export const addCurrentSongAction = songObj => ({
  type: types.ADD_CURRENT_SONG,
  payload: songObj,
})

export const playSongAction = () => ({
  type: types.PLAY_SONG,
})

export const pauseSongAction = () => ({
  type: types.PAUSE_SONG,
})
