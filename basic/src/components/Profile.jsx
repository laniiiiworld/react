import React from 'react';
import Avatar from './Avatar';

export default function Profile({ isNew, imageUrl, name, job }) {
  return (
    <div className='profile'>
      <Avatar imageUrl={imageUrl} isNew={isNew} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
