import React from "react";
import { secsToMins } from "../../assets/helpers";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import {
  likeSongAction,
  dislikeSongAction,
} from "../../redux/actions/actions.js";
import { HeartFill, Heart } from "react-bootstrap-icons";
import "./TrackList.css";

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
            <Col md={9}>TITLE</Col>
            <Col className="text-center" md={1}>
              <i className="far fa-clock"></i>
            </Col>
            <Col></Col>
          </Row>
          {this.props.tracks.map((track, i) => (
            <Row key={track.id} className="py-2 text-white">
              <Col className="text-center" md={1}>
                <p className="mx-2 my-0 text-muted">{i + 1}</p>
              </Col>
              <Col md={9}>
                <p className="my-0">{track.title}</p>
              </Col>
              <Col className="text-center" md={1}>
                <p className="my-0 text-muted">{secsToMins(track.duration)}</p>
              </Col>
              <Col>
                {this.props.likes.songs.find((_track) => {
                  console.log("track id", track.id);
                  return _track.id === track.id;
                }) ? (
                  <HeartFill
                    className="heartfill_tracklist"
                    onClick={() => this.props.dislikeSong(track.id)}
                  />
                ) : (
                  <Heart
                    className="heart_tracklist"
                    onClick={() => this.props.likeSong(track)}
                  />
                )}
              </Col>
            </Row>
          ))}
        </section>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TrackList);
