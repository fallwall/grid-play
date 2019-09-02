import React from 'react';
import "./Tile1.css";

export default function Tile1() {
  return (
    <div className="tile-container">
      {Array(25).fill("tile").map((t, i) =>
        <div key={i} className={i % 2 === 0 ? "black tile" : "grey tile"}></div>
      )}
    </div>
  )
}
