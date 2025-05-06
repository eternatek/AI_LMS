import { SignIn, useClerk } from '@clerk/clerk-react';
import React, { useEffect } from 'react';
import './Login.css'; 

export default function Login() {
  const { signOut } = useClerk();

  useEffect(() => {
    signOut();
  }, []);

  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className='illuss'></div>
        <SignIn afterSignInUrl="/dashboard" />
      </div>
    </div>
  );
}