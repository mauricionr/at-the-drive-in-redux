import React from 'react';

export default class Search extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  _search() {
    this.props.searchMovie(this.state.text)
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div>
        <input type="text"
              value={this.state.text}
              placeholder="search for a movie..."
              onChange={this.handleChange.bind(this)}/>
        <button onClick={this._search.bind(this)}>Search</button>
      </div>
    );
  }

}
