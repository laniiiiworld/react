import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(
    ['products', checked],
    async () => {
      console.log('fetching...', checked);
      const res = await fetch(`data/${checked ? 'sale_' : ''}products.json`);
      return await res.json();
    },
    {
      staleTime: 1000 * 60, //1분
    }
  );

  const [count, setCount] = useState(0);
  const handleChange = () => setChecked((prev) => !prev);

  if (error) return <span>{error}</span>;

  if (isLoading) return <span>로딩중...</span>;

  return (
    <>
      <input id='checkbox' type='checkbox' value={checked} onChange={handleChange} />
      <label htmlFor='checkbox'>Show only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
