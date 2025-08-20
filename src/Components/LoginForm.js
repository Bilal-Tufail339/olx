import React from 'react';
import "./Sell.css";
import GoogleLogo from "./google.png";     // apna Google logo
import FacebookLogo from "./facebook1.jpeg"; // apna Facebook logo

export default function Login() {
  return (
    <div className="login-container">
   <h2 >Olx</h2>
      <p className='login-text'><strong>Login into your OLX account</strong></p>

      {/* Google Login */}
      <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="login-btn">
        <img src={GoogleLogo} alt="Google" className="login-icon" />
        <span>Login with Google</span>
      </a>

      {/* Facebook Login */}
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="login-btn">
        <img src={FacebookLogo} alt="Facebook" className="login-icon" />
        <span>Login with Facebook</span>
      </a>

      <p className="or">OR</p>

      {/* Email Login */}
      <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" className="login-btn">
        <i className="fa-solid fa-envelope login-fa-icon"></i>
        <span>Login with Email</span>
      </a>

      {/* Phone Login */}
      <a href="/" className="login-btn">
        <i className="fa-solid fa-phone login-fa-icon"></i>
        <span>Login with Phone</span>
      </a>

      <a href="/" className="create-account">New to OLX? Create an account</a>
    </div>
  );
}
