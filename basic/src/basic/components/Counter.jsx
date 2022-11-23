import React, { useState } from 'react';

export default function Counter({ total, addTotal }) {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
    addTotal();
  };

  return (
    <div className='counter'>
      <p className='number'>
        {count}
        <span className='total'>/{total}</span>
      </p>
      <button className='addButton' onClick={addCount}>
        Add +
      </button>
    </div>
  );
}
