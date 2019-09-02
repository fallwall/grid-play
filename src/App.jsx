import React, { Component } from 'react';
import Home from './components/Home';
import Tile1 from './components/Tile1';
import { Link, Route } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>

        <Link exact to="/">Home</Link>
        <Link exact to="/tile1">Tile1</Link>

        <Route path="/" render={() => <Home />} />
        <Route path="/tile1" render={() => <Tile1 />} />
      </div>
    )
  }
}
