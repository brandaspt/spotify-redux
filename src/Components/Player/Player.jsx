import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import './Player.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

function Player(props) {
  const dispatch = useDispatch();
  const songToPlay = useSelector((state) => state.currentSong.songObj.preview);
  console.log(songToPlay);

  return (
    <footer className='player'>
      <AudioPlayer
        elevation={1}
        width='500px'
        variation='primary'
        download={false}
        loop={true}
        debug={false}
        src={songToPlay}
      />
      <Row className='border-top border-secondary'></Row>
    </footer>
  );
}

export default Player;
