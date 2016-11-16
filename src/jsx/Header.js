import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/Header.css';

// Header
export default class Header extends Component {
  render() {
    return (
      <div id="header" className="navbar navbar-inverse navbar-static-top">
        <img src={logo} className="logo" alt="logo" />
        <h2>React Boilerplate</h2>
      </div>
    );
  }
}
