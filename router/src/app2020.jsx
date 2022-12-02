import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './components/home';
import Profile from './components/profile';

import React from 'react';

const App = (props) => {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
