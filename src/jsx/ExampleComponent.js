import React, { Component } from 'react';
import '../styles/ExampleComponent.css';

// ExampleComponent
export default class ExampleComponent extends Component {
  render() {
    return (
      <div className="example-component">
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
