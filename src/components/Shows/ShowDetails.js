import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../index';
import { watchShow } from '../../actions/shows';

@connect(({ Shows }) => ({ Shows }))
export default class ShowDetails extends Component {

  static contextTypes = {
    router: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context)
    this.context = context;
  }

  _listEpisodes(eps) {
    let episodes = [];

    for(let ep of eps) {
      episodes.push(<li onClick={this._selectEpisode.bind(this, ep)} >{ep.title}</li>);
    };

    return episodes;
  }

  _selectEpisode(ep) {
    this.props.dispatch(watchShow(ep.torrents[0].url))
    this.context.router.transitionTo(`/screen`);
  }

  render() {
    const {
      props: {
        Shows
      }
    } = this;

    const currShow = Shows.get(`currShow`).toJS() || {};

    let banner = (currShow && currShow.images) ? currShow.images.banner : '';

    let bannerStyle = {
      height: '100%',
      width: '100%',
      maxHeight: '700px',
      maxWidth: '1140px',
      backgroundImage: 'url(' + banner + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    }

    return (
      <div className="show-details">
        <div style={bannerStyle}>
          <div className="show-details-title">
            <h1>{currShow.title}</h1>
          </div>
        </div>
        <div className="show-details-synopsis">
          <p>{currShow.synopsis}</p>
        </div>
        <ul className="show-details-show-list">
          {currShow && currShow.episodes ? this._listEpisodes(currShow.episodes): <Loader />}
        </ul>
      </div>
    )
  }

}
