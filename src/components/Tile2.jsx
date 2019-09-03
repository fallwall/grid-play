import React, { useEffect } from 'react';
import './Tile2.css';

const colors = [
  '#212436',
  '#4458A0',
  '#BD098E',
  '#CD2D48',
  '#F1C40F',
  '#672394',
  '#F725A0',
  '#FAD141',
  '#0CB2C0',
  '#E8E6D9'
];

export default function Tile2() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every sec!');
      const randNum = Math.floor(Math.random() * 25);
      document.getElementById(randNum).setAttribute('style', `background-color: ${colors[Math.floor(Math.random() * colors.length)]} `);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tiles-container">
      {Array(25).fill("memphis").map((m, i) =>
        <div
          key={i}
          className="container"
          id={i}
          style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}
        >
          <div className="memphis-blue"></div>
          <div className="middle">
            <div className="text">MEMPHIS</div>
          </div>
        </div>)}
    </div>
  )
}
