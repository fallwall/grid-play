import React, { Component } from 'react';
import Home from './components/Home';
import Tile1 from './components/Tile1';
import Tile2 from './components/Tile2';
import Tile3 from './components/Tile3';
import { Link, Route } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>

        <Link exact to="/">Home</Link>
        <Link to="/tile1">Tile1</Link>
        <Link to="/tile2">Tile2</Link>
        <Link to="/tile3">Tile3</Link>

        <Route path="/" render={() => <Home />} />
        <Route path="/tile1" render={() => <Tile1 />} />
        <Route path="/tile2" render={() => <Tile2 />} />
        <Route path="/tile3" render={() => <Tile3 />} />
      </div>
    )
  }
}
