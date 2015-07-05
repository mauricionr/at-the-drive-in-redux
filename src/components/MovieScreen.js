import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// TODO: get url to stream movie from reducer

export default class MovieScreen {

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <video width="900" height="450" src="https://ia802700.us.archive.org/22/items/Drive-inWelcomeToTheDrive-in/DriveIn-WelcomeToTheDriveIn-NightSky_512kb.mp4" preload="auto" controls></video>
      </div>
    );
  }

}
