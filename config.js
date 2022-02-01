/*export const firebaseConfig = {
apiKey: "AIzaSyATioi8MeQELx7gDBro_ozEF1YLmVmPOXw",
authDomain: "health-app-70b4f.firebaseapp.com",
databaseURL: "https://health-app-70b4f-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "health-app-70b4f",
storageBucket: "health-app-70b4f.appspot.com",
messagingSenderId: "704232930253",
appId: "1:704232930253:web:e047e2c256cc000644e284"
};*/

import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyATioi8MeQELx7gDBro_ozEF1YLmVmPOXw",
  authDomain: "health-app-70b4f.firebaseapp.com",
  databaseURL: "https://health-app-70b4f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "health-app-70b4f",
  storageBucket: "health-app-70b4f.appspot.com",
  messagingSenderId: "704232930253",
  appId: "1:704232930253:web:e047e2c256cc000644e284"
  };
  // Initialize Firebase
  
  firebase.initialize