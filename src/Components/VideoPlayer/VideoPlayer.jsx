import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from "../../assets/wowvid.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    console.log('Click detected');
    console.log('Clicked element:', e.target);
    console.log('Player element:', player.current);

    if (e.target === player.current) {
      console.log('Closing player');
      setPlayState(false);
    }
  };

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
