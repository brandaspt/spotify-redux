import { createStore, combineReducers } from "redux"

import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

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
    volume: 0.5,
  },
}

const persistConfig = {
  key: "root",
  storage,
}

const mainReducer = combineReducers({
  likes: likesReducer,
  currentSong: currentSongReducer,
})

const persistedReducer = persistReducer(persistConfig, mainReducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const persistor = persistStore(store)

export { store, persistor }
