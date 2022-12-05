import { useEffect, useState } from 'react';

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError('');
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('get data');
        setProducts(data);
      })
      .catch((error) => setError('error 🤪'))
      .finally(() => setLoading(false));
    return () => console.log('clean');
  }, [salesOnly]);

  return [loading, error, products];
}
