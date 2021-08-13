import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { dislikeSongAction, likeSongAction } from "../../redux/actions/actions";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  likeSong: (songObj) => dispatch(likeSongAction(songObj)),
  dislikeSong: (songId) => dispatch(dislikeSongAction(songId)),
});

class Favorites extends Component {
  render() {
    return (
      <>
        <Container></Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
