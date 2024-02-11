import React from 'react';
import YouTube from 'react-youtube';
import './youtubeplayer.css'
import image from '../jambotron/peinture-lac-montagne-montagne-arriere-plan.jpg'
const LatestEvents = () => {
  // Options for the YouTube player
  const opts = {
    height: '200vh',
    width: '70%',
    playerVars: {
      autoplay: 0,
    },
  };

  // ID of the YouTube video
  const videoId = '3v4VyFdZ_98'; // Replace with your YouTube video ID

  // Handler for video ready event
  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div className="latest-events-container  " style={{ backgroundImage: `url(${image})`,backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
      <div className="video-thumbnail me-4">
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
      <div className="event-content">
        <h2>LATEST EVENTS</h2>
        <p>We discovered many exotic & breath-catching places in our beautiful country and we tried to capture every & each moment that were illustrated with laughters, joy & excitement. Do not miss the chance to live such experience with us.</p>
        <button className="learn-more-button">Learn more</button>
      </div>
    </div>
  );
};

export default LatestEvents;