import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

import "./ContentCard.css"

const ArtistCard = props => {
  return (
    <Col className="mb-4" xs={12} sm={6} md={4} lg={3}>
      <Card className="h-100 bg-transparent border-0 content-card">
        <Card.Img className="rounded-circle" variant="top" src={props.artistObj.picture_medium} />
        <Card.Body className="p-2 bg-transparent">
          <Link className="text-white" to={`/artist?id=${props.artistObj.id}`}>
            <Card.Title className="m-0 text-center">{props.artistObj.name}</Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ArtistCard
