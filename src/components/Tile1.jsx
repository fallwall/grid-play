import React from 'react';
import "./Tile1.css";

export default function Tile1() {
  return (
    <div className="tile-container">
      {Array(25).fill("tile").map((t, i) =>
        <div key={i} className={i % 2 === 0 ? "black tile-block" : "grey tile-block"}>
          <div className="tile"></div>
          <div className="tile-block-hover">
            <div className="tile-text">
              Memphis
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
