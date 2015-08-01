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

  handleKeyDown(e) {
    if(e.keyCode === 13) this._search();
  }

  render() {
    return (
      <div>
        <input type="text"
              className="search"
              value={this.state.text}
              placeholder="Search"
              onChange={this.handleChange.bind(this)}
              onKeyDown={this.handleKeyDown.bind(this)} />
      </div>
    );
  }

}
