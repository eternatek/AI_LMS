import React from 'react';
import { SignOutButton, SignedIn } from '@clerk/clerk-react';

const Signout = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
    }}>
        <SignOutButton redirectUrl="/" signOutOptions={{ redirectUrl: "/" }}>
          <button style={{
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#333',
            color: '#fff',
            cursor: 'pointer'
          }}>
            Sign Out
          </button>
        </SignOutButton>
    </div>
  );
};

export default Signout;