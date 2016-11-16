import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Header.js';
import AddButton from './AddButton.js';
import ListView from './ListView.js';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    // Fetch the data
    $.ajax({
      url: 'sample.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({list: data.jsondata});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  updateList(data) {
    let currentList = this.state.list;
    currentList.push({id: currentList.length, data: data});
    this.setState({list: currentList});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <AddButton updateList={this.updateList.bind(this)}/>
          <ListView displayData={this.state.list}/>
        </div>
      </div>
    );
  }
}

export default App;
