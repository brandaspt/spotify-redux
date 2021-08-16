import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./ContentCard.css"

const AlbumCard = props => {
  return (
    <Col className="mb-4" xs={12} sm={6} md={4} lg={3}>
      <Card className="h-100 bg-transparent border-0 content-card" id="album_img">
        <Card.Img variant="top" src={props.albumObj.cover_medium} />
        <Card.Body className="p-2 bg-transparent">
          <Link className="text-white" to={`/album?id=${props.albumObj.id}`}>
            <Card.Title className="m-0 text-center">{props.albumObj.title}</Card.Title>
          </Link>
          {props.albumObj.artist && (
            <Link className="text-muted" to={`/artist?id=${props.albumObj.artist.id}`}>
              <Card.Text className="m-0 text-center">by {props.albumObj.artist.name}</Card.Text>
            </Link>
          )}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default AlbumCard
