import { SignUp, useClerk } from '@clerk/clerk-react';
import React, { useEffect } from 'react';
import './Signup.css'; 

export default function Signup() {
  const { signOut } = useClerk();

  useEffect(() => {
    signOut();
  }, []);

  return (
    <div className="signup-container">
      <div className='logo-signup'></div>
      <div className="signup-box">
        <div className='illus'></div>
        <SignUp afterSignUpUrl="/dashboard" />
      </div>
    </div>
  );
}