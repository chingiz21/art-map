import React from 'react';
import SearchInput from './components/SearchInput';
import User from './components/User';
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <h1>Art Map</h1>
      <SearchInput />
      <User />
    </div>
  )
}

export default NavBar