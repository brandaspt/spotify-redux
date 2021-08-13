import { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import ContentGrid from "../Home/ContentGrid/ContentGrid"
import TrackList from "../TrackList/TrackList"

import { fetchArtistById, fetchArtistTopTracks, fetchArtistAlbums } from "../../assets/fetch"

import "./ArtistDetails.css"

const ArtistDetails = props => {
  const params = new URLSearchParams(props.location.search)
  const id = params.get("id")

  const [artistData, setArtistData] = useState({})
  const [topTracks, setTopTracks] = useState([])
  const [artistAlbums, setArtistAlbums] = useState([])

  useEffect(() => {
    fetchArtistById(id, setArtistData)
    fetchArtistTopTracks(id, setTopTracks)
    fetchArtistAlbums(id, setArtistAlbums)
  }, [id])

  if (!Object.keys(artistData).length || !artistAlbums.length) {
    return null
  }
  return (
    <Container fluid className="artist-details">
      <Row className="hero-section p-4">
        <img src={artistData.picture_medium} height="300px" className="img-fluid mr-3" alt="" />
        <div className="d-flex flex-column mt-auto">
          <h1 className="mt-2 text-white">{artistData.name}</h1>
          <h4 className="text-white">{artistData.nb_fan.toLocaleString()} fans</h4>
          <span className="text-muted">{artistData.nb_album} albums</span>
        </div>
      </Row>
      <h3 className="text-white">Top 5 Tracks</h3>
      <TrackList tracks={topTracks} />
      <h3 className="text-white">Albums</h3>
      <ContentGrid type="album" data={artistAlbums} />
    </Container>
  )
}

export default ArtistDetails
