  // src/pages/Signup.js
  import React, { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  
  function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSignup = async () => {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('User signed up successfully');
        navigate('/signin'); // Redirect to signin page
      } catch (error) {
        console.error('Error signing up:', error.message);
      }
    };
  
    return (
      <div>
        <h2>Signup</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    );
  }
  
  export default Signup;