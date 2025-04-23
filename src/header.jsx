import React from 'react';
import { Link } from 'react-router-dom';

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
      <div style={{flex: 1, textAlign: 'left'}}>
        <Link to="/home" style={{textDecoration: 'none', color: 'black', fontSize: '1.2rem'}}>Home</Link>
      </div>
      <div style={{flex: 1, textAlign: 'center'}}>
        <Link to="/features" style={{textDecoration: 'none', color: 'black', fontSize: '1.2rem'}}>Features</Link>
      </div>
      <div style={{flex: 1, textAlign: 'right'}}>
        <Link to="/pricing" style={{textDecoration: 'none', color: 'black', fontSize: '1.2rem'}}>Pricing</Link>
      </div>
    </div>
  );
}

export default Header;
