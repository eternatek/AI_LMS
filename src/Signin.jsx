import React from 'react';
import './Signin.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const navigate = useNavigate();

  return (
    <GoogleOAuthProvider clientId="573476121312-nj6p5niphf8p5qgv7v39hetj4f6c4ppt.apps.googleusercontent.com">
      <div className="signin-container">
        <div>
          <h2>Sign in with Google</h2>
          <div className="signin-card">
            <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
                navigate('/dashboard');
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>
        </div>
        <img
          className="signin-illustration"
          src="data/Tablet login-rafiki.png"
          alt="Illustration"
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default Signin;