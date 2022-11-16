import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';

export default function App() {
  const [total, setTotal] = useState(0);

  const addTotal = () => setTotal(total + 1);

  return (
    <div className='container'>
      <div className='banner'>
        Total Count: {total} {total <= 10 ? '❄️' : '🔥'}
      </div>
      <div className='counters'>
        <Counter total={total} addTotal={addTotal} />
        <Counter total={total} addTotal={addTotal} />
      </div>
    </div>
  );
}
