import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Header.js';
import ActionButton from './ActionButton.js';
import ExampleComponent from './ExampleComponent.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // Fetch the data
    $.ajax({
      url: 'sample.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.jsondata});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  updateData(data) {
    let currentData = this.state.data;
    currentData.push({id: currentData.length, data: data});
    this.setState({data: currentData});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <ActionButton updateData={this.updateData.bind(this)}/>
          <ExampleComponent displayData={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
