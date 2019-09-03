import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home">


        <img src='https://i.imgur.com/8ZG2tjm.jpg' alt='beale st' style={{ width: "100vw", marginTop: "-140vh"}} />


        <div className="content">
          <p>About that time I visited Memphis for the fist time.</p>
          <p>I was inspired by some colorful grids.</p>
          <p>Immediately realizing...</p>
          <p>In my head, I'm already coding this.</p>
        </div>

      </div>
    )
  }
}
