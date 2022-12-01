import React from 'react';

export default function App() {
  return (
    <div>
      <Navbar>
        <Avatar //
          imageUrl='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
          name='bob'
          size='200'
        />
        <p>hello, new Navbar!</p>
      </Navbar>

      <Navbar>
        <p>hello, new Navbar!</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: 'yellow' }}>{children}</header>;
}

function Avatar({ imageUrl, name, size }) {
  return (
    <div>
      <img src={imageUrl} alt={`${name}`} width={size} height={size} style={{ borderRadius: '50%' }} />
    </div>
  );
}
