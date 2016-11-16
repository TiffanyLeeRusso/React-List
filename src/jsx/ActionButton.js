import React, { Component } from 'react';
import '../styles/ActionButton.css';

// ActionButton
export default class ActionButton extends Component {
  propTypes: { updateData: React.PropTypes.func }

  action(takeAction) {
    if(takeAction) {
      let newData = Math.floor(Math.random() * (10000 - 0)) + 0;
      this.props.updateData(newData);
    }
  }

  render() {
    return (
      <div className="action-button">
        <button className="btn btn-primary" onClick={this.action.bind(this, true)}>Action</button>
      </div>
    );
  }
}
