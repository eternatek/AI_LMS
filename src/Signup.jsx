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
      <div className="signup-box">
        <SignUp afterSignUpUrl="/dashboard" />
      </div>
    </div>
  );
}