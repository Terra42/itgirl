//import { DBconfig } from './config';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAzClsPp1Uy7Om4swwgV1WIEqZN03M37ag',
  authDomain: 'itgirl-2f4eb.firebaseapp.com',
  projectId: 'itgirl-2f4eb',
  storageBucket: 'itgirl-2f4eb.appspot.com',
  messagingSenderId: '395973786105',
  appId: '1:395973786105:web:4f8d9fd16baf4f0adda528',
  measurementId: 'G-LMXJK4M89T',
};
console.log(process.env.REACT_APP_API_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//const analytics = getAnalytics(app);
