import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// we need to somehow  seed the database

// we need a cogif here
const config = {
  apiKey: 'AIzaSyD2cEr_HPjfkuNPW4x2TM3VVzsMChWDBA0',
  authDomain: 'netflix-clone-2042b.firebaseapp.com',
  databaseURL: 'https://netflix-clone-2042b.firebaseio.com',
  projectId: 'netflix-clone-2042b',
  storageBucket: 'netflix-clone-2042b.appspot.com',
  messagingSenderId: '15080129902',
  appId: '1:15080129902:web:d9295c8761ff5e118c2d7f',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
