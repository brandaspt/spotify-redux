import { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import TrackList from "../TrackList/TrackList"

import { fetchAlbumById } from "../../assets/fetch"

import "./AlbumDetails.css"

const AlbumDetails = props => {
  const params = new URLSearchParams(props.location.search)
  const id = params.get("id")

  const [albumData, setAlbumData] = useState({})

  useEffect(() => {
    fetchAlbumById(id, setAlbumData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!Object.keys(albumData).length) {
    return null
  }
  return (
    <Container fluid className="album-details">
      <Row className="hero-section p-4">
        <img src={albumData.cover_medium} height="300px" className="img-fluid mr-3" alt="" />
        <div className="d-flex flex-column mt-auto">
          <h1 className="mt-2 text-white">{albumData.title}</h1>
          <div className="d-flex align-items-center">
            <Link to={`/artist?id=${albumData.artist.id}`}>
              <h5 className="m-0 text-white">{albumData.artist.name}</h5>
            </Link>
            <div className="text-muted d-flex align-items-center">
              <i className="fas fa-circle mx-2"></i>
              <span>{albumData.release_date.slice(0, 4)}</span>
              <i className="fas fa-circle mx-2"></i>
              <span>{albumData.nb_tracks} tracks</span>
            </div>
          </div>
        </div>
      </Row>
      <TrackList tracks={albumData.tracks.data} />
    </Container>
  )
}

export default AlbumDetails
