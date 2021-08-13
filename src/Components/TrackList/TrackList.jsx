import { secsToMins } from "../../assets/helpers"
import { Col, Row } from "react-bootstrap"

const TrackList = props => {
  return (
    <section className="tracklist-section">
      <Row className="my-3 text-muted">
        <Col className="text-center" md={1}>
          #
        </Col>
        <Col md={10}>TITLE</Col>
        <Col className="text-center" md={1}>
          <i className="far fa-clock"></i>
        </Col>
      </Row>
      {props.tracks.map((track, i) => (
        <Row key={track.id} className="py-2 text-white">
          <Col className="text-center" md={1}>
            <p className="mx-2 my-0 text-muted">{i + 1}</p>
          </Col>
          <Col md={10}>
            <p className="my-0">{track.title}</p>
          </Col>
          <Col className="text-center" md={1}>
            <p className="my-0 text-muted">{secsToMins(track.duration)}</p>
          </Col>
        </Row>
      ))}
    </section>
  )
}

export default TrackList
