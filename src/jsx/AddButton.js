import React, { Component } from 'react';
import '../styles/AddButton.css';

// AddButton
export default class AddButton extends Component {
  propTypes: { updateList: React.PropTypes.func }

  action(takeAction) {
    if(takeAction) {
      let newData = Math.floor(Math.random() * (10000 - 0)) + 0;
      this.props.updateList(newData);
    }
  }

  render() {
    return (
      <div className="add-button">
        <button className="btn btn-primary" onClick={this.action.bind(this, true)}>Add</button>
      </div>
    );
  }
}
