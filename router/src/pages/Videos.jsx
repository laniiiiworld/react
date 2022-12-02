import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Videos() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/videos/${text}`);
  };

  return (
    <div>
      Videos
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={handleChange} />
      </form>
    </div>
  );
}
