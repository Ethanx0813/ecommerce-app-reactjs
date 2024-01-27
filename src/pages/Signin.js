
   // src/pages/Signin.js
   import React, { useState } from 'react';
   import { Link, useNavigate } from 'react-router-dom';
   import firebase from 'firebase/compat/app';
   import 'firebase/compat/auth';
   
   function Signin() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const navigate = useNavigate();
   
     const handleSignin = async () => {
       try {
         await firebase.auth().signInWithEmailAndPassword(email, password);
         console.log('User signed in successfully');
         navigate('/product-list'); // Redirect to product list page
       } catch (error) {
         console.error('Error signing in:', error.message);
       }
     };
   
     return (
       <div>
         <h2>Signin</h2>
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
         <button onClick={handleSignin}>Sign In</button>
         <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
       </div>
     );
   }
   
   export default Signin;