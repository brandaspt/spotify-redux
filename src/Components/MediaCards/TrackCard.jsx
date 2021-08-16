import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { secsToMins } from "../../assets/helpers"
import LikeDislikeBtn from "../LikeDislikeBtn/LikeDislikeBtn"
import PlayPauseBtn from "../PlayPauseButton/PlayPauseBtn"

import "./ContentCard.css"

const TrackCard = props => {
  return (
    <Col className="mb-4" xs={12} sm={6} md={4} lg={3}>
      <Card className="h-100 bg-transparent border-0 content-card">
        <div className="position-relative">
          <Card.Img variant="top" src={props.trackObj.album.cover_medium} />
          <PlayPauseBtn songObj={props.trackObj} />
          <LikeDislikeBtn songId={props.trackObj.id} />
        </div>
        <Card.Body className="p-2 bg-transparent">
          <Card.Title className="m-0 text-center text-white">{props.trackObj.title}</Card.Title>
          <Link className="text-muted" to={`/album?id=${props.trackObj.album.id}`}>
            <Card.Text className="m-0 text-center">{props.trackObj.album.title}</Card.Text>
          </Link>
          <Link className="text-muted" to={`/artist?id=${props.trackObj.artist.id}`}>
            <Card.Text className="m-0 text-center">{props.trackObj.artist.name}</Card.Text>
          </Link>
          <Card.Text className="m-0 text-center">{secsToMins(props.trackObj.duration)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default TrackCard
