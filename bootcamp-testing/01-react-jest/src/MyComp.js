import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class MyComp extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  sayHello() {
    this.setState({'hello': 'world'})
  }

  render() {
    return (
      <div className="App">
        <h1>hello</h1>
      </div>
    );
  }
}