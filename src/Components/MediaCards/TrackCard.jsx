import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { secsToMins } from "../../assets/helpers";
import { HeartFill, Heart } from "react-bootstrap-icons";
import { connect } from "react-redux";

import { likeSongAction, dislikeSongAction } from "../../redux/actions/actions";

import "./ContentCard.css";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  likeSong: (songObj) => dispatch(likeSongAction(songObj)),
  dislikeSong: (songId) => dispatch(dislikeSongAction(songId)),
});

const TrackCard = (props) => {
  return (
    <Col className="mb-4" xs={12} sm={6} md={4} lg={3}>
      <Card className="h-100 bg-transparent border-0 content-card">
        <Card.Img variant="top" src={props.trackObj.album.cover_medium} />
        <Card.Body className="p-2 bg-transparent">
          <Card.Title className="m-0 text-center text-white">
            {props.trackObj.title}
          </Card.Title>
          <Link
            className="text-muted"
            to={`/album?id=${props.trackObj.album.id}`}
          >
            <Card.Text className="m-0 text-center">
              {props.trackObj.album.title}
            </Card.Text>
          </Link>
          <Link
            className="text-muted"
            to={`/artist?id=${props.trackObj.artist.id}`}
          >
            <Card.Text className="m-0 text-center">
              {props.trackObj.artist.name}
            </Card.Text>
          </Link>
          <Card.Text className="m-0 text-center">
            {secsToMins(props.trackObj.duration)}
            {props.likes.songs.find((_trackObj) => {
              // console.log("track id", props.trackObj.id);
              return _trackObj.id === props.trackObj.id;
            }) ? (
              <HeartFill
                id="heartfill"
                onClick={() => props.dislikeSong(props.trackObj.id)}
              />
            ) : (
              <Heart
                id="heart"
                onClick={() => props.likeSong(props.trackObj)}
              />
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(TrackCard);
