import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

import "./ContentCard.css"

const ContentCard = props => {
  return (
    <Col className="mb-4" xs={12} sm={6} md={4} lg={3}>
      <Link to={`/${props.type}?id=${props.item.id}`}>
        <Card className="h-100 bg-transparent border-0">
          <Card.Img variant="top" src={props.item.cover_medium || props.item.picture_medium || props.item.album.cover_medium} />
          <Card.Body className="p-2 bg-transparent text-white">
            <Card.Title className="m-0 text-center">{props.item.title || props.item.name}</Card.Title>
            {props.item.album && <Card.Text className="text-center">{props.item.album.title}</Card.Text>}
          </Card.Body>
        </Card>
      </Link>
    </Col>
  )
}

export default ContentCard
