import React from 'react';

export default function Avatar({ isNew, imageUrl }) {
  return (
    <div className='avatar'>
      <img //
        className='photo'
        src={imageUrl}
        alt='avatar'
      />
      {isNew && <h3 className='new'>New</h3>}
    </div>
  );
}
