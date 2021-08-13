import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

import "./Sidebar.css"

const Sidebar = () => {
  return (
    <nav className="sidebar d-flex flex-column align-items-center p-3">
      <img alt="" src="/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_White.png" height="50px" />
      <Nav className="d-flex flex-column align-items-start w-100 my-5">
        <Link to="/">
          <i className="fas fa-home"></i>Home
        </Link>
        <Link to="/search">
          <i className="fas fa-search"></i>Search
        </Link>
        <Link to="/library">
          <i className="fas fa-stream"></i>Your Library
        </Link>
      </Nav>
    </nav>
  )
}

export default Sidebar
