import React, { useState } from 'react';
import './AppXY.css';

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className='container' onPointerMove={handlePointerMove}>
      <div className='pointer' style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
    </div>
  );
}
