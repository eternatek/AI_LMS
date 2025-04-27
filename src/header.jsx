import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div style={{
      position: 'absolute',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '1rem 2rem',
      borderRadius: '9999px',
      color: 'black',
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      zIndex: 1000,
      minWidth: '40%',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{flex: 1, textAlign: 'left',}}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'header-link-active' : 'header-link'}>Home</NavLink>
      </div>
      <div style={{flex: 1, textAlign: 'center'}}>
        <NavLink to="/features" className={({ isActive }) => isActive ? 'header-link-active' : 'header-link'}>Features</NavLink>
      </div>
      <div style={{flex: 1, textAlign: 'right'}}>
        <NavLink to="/aiproducts" className={({ isActive }) => isActive ? 'header-link-active' : 'header-link'}>AI Products</NavLink>
      </div>
    </div>
  );
}

export default Header;
