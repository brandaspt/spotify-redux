import { createStore, combineReducers } from "redux"

import currentSongReducer from "./reducers/currentSong"
import likesReducer from "./reducers/likes"

export const initialState = {
  likes: {
    songs: {},
    albums: {},
    artists: {},
  },
  currentSong: {
    songObj: {},
    playing: false,
    duration: 0,
    currentTime: 0,
    volume: localStorage.getItem("volume") || 0.5,
  },
}

const mainReducer = combineReducers({
  likes: likesReducer,
  currentSong: currentSongReducer,
})

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
