import React from "react";
import { secsToMins } from "../../assets/helpers";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import {
  likeSongAction,
  dislikeSongAction,
} from "../../redux/actions/actions.js";
import { HeartFill, Heart } from "react-bootstrap-icons";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  likeSong: (songObj) => dispatch(likeSongAction(songObj)),
  dislikeSong: (songId) => dispatch(dislikeSongAction(songId)),
});

class TrackList extends React.Component {
  render() {
    return (
      <>
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
          {this.props.tracks.map((track, i) => (
            <Row key={track.id} className="py-2 text-white">
              <Col style={{ width: "20px" }}>
                {this.props.tracks.find((_tracks) => track.id === track.id) ? (
                  <HeartFill
                    id="heartfill"
                    onClick={() =>
                      this.props.dislikeSong(this.props.likes.songs)
                    }
                  />
                ) : (
                  <Heart
                    id="heart"
                    onClick={() => this.props.likeSong(this.props.likes.songs)}
                  />
                )}
              </Col>
              <Col className="text-center" md={1}>
                <p className="mx-2 my-0 text-muted">{i + 1}</p>
              </Col>
              <Col md={9}>
                <p className="my-0">{track.title}</p>
              </Col>
              <Col className="text-center" md={1}>
                <p className="my-0 text-muted">{secsToMins(track.duration)}</p>
              </Col>
            </Row>
          ))}
        </section>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
