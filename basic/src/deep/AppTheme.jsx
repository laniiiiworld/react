import React, { useContext } from 'react';
import './AppTheme.css';
import { DarkeModeProvider, DarkModeContext } from './context/DarkModeContext';

export default function App() {
  return (
    <DarkeModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkeModeProvider>
  );
}

function Header() {
  return <header className='header'>Header</header>;
}

function Main() {
  return (
    <main className='main'>
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  const { darkmode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      ProductDetail
      <p>
        Dark Mode:
        {darkmode ? ( //
          <span style={{ backgroundColor: 'black', color: 'white' }}>dark</span>
        ) : (
          <span>light</span>
        )}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className='footer'>Footer</footer>;
}
