import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID
  apiKey: "AIzaSyDVIQ0-_HwvflJekeEue8RB3w_Em3phdjA",
  authDomain: "myfleet-3660a.firebaseapp.com",
  databaseURL: "https://myfleet-3660a-default-rtdb.firebaseio.com",
  projectId: "myfleet-3660a",
  storageBucket: "myfleet-3660a.appspot.com",
  messagingSenderId: "530521123944",
  appId: "1:530521123944:web:ee16814d25ab11ecdb1fdd"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }