import { SignIn, useClerk } from '@clerk/clerk-react';
import React, { useEffect } from 'react';

export default function Login() {
  const { signOut } = useClerk();

  useEffect(() => {
    signOut();
  }, []);

  return <SignIn afterSignInUrl="/dashboard" />;
}