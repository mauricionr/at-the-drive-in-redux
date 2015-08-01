import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

@connect(({ Movies }) => ({ Movies }))
export default class MovieScreen extends React.Component {

  render() {

    const {
      props: {
        Movies
      }
    } = this;

    const currStream = Movies.get(`currStream`);

    return (
      <div>
        <Link className="btn-back" to="/">X</Link>
        { currStream !== '' ?
            <video width="900" height="450" src={currStream} preload="auto" controls></video>:
            <video width="900" height="450" src="https://ia802700.us.archive.org/22/items/Drive-inWelcomeToTheDrive-in/DriveIn-WelcomeToTheDriveIn-NightSky_512kb.mp4" preload="auto" controls></video>
        }
      </div>
    );
  }

}
