import React, { Component } from 'react';
import '../styles/ListView.css';

// ListView
export default class ListView extends Component {
  render() {
    return (
      <div className="list-view">
        <h4>Current Data:</h4>
        <Display displayData={this.props.displayData}/>
      </div>
    );
  }
}

class Display extends Component {
  render() {

    if(this.props.displayData.length > 0) {
      var list = this.props.displayData.map(function(item) {
        return (
          <li key={item.id}>{item.data}</li>
        );
      });
      return (
        <ul>
          {list}
        </ul>
      );
    }
    else {
      return ( <div>Nothing in the list!</div>);
    }
  }
}
