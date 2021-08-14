import "./App.css"

import { Route } from "react-router-dom"

import Sidebar from "../Sidebar/Sidebar"
import PlayerMaterial from "../PlayerMaterial/PlayerMaterial"
import Home from "../Home/Home"
import SearchGrid from "../SearchGrid/SearchGrid"
import AlbumDetails from "../AlbumDetails/AlbumDetails.jsx"
import ArtistDetails from "../ArtistDetails/ArtistDetails.jsx"

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Route exact path="/" component={Home} />
      <Route path="/search" component={SearchGrid} />
      <Route path="/album" component={AlbumDetails} />
      <Route path="/artist" component={ArtistDetails} />
      <PlayerMaterial />
    </div>
  )
}

export default App
