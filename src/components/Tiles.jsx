import React from 'react';
import "./Tiles.css";

export default function Tiles() {
  return (
    <div className="tile-container">
      {Array(25).fill("tile").map((t, i) =>
        <div key={i} className={ i  % 2 === 0 ? "black tile" : "red tile"}></div>
      )}
    </div>
  )
}
