
   // src/firebase.js
   import firebase from 'firebase/app';
   import 'firebase/auth';

   const firebaseConfig = {
    apiKey: "AIzaSyCIKivrHCo3XYEBc45aW0EIhlcg-nnKaEk",
    authDomain: "react-ecommerce-store-8c372.firebaseapp.com",
    projectId: "react-ecommerce-store-8c372",
    storageBucket: "react-ecommerce-store-8c372.appspot.com",
    messagingSenderId: "591455354616",
    appId: "1:591455354616:web:9127b5ca220e6ad3b8850d",
    databaseURL :"https://react-ecommerce-store-8c372-default-rtdb.firebaseio.com",
  }

   ;

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   export default firebase;