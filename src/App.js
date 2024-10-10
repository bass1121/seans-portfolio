
import React, { Component } from 'react';
import moment from "moment";
import './styles/App.css';

export default class App extends Component {
  render() {
      return (
        <div className="app">
        <h1>Sean Bass's Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
      </div>
    );
  }
}
