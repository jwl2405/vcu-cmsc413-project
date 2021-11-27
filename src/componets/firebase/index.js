// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOEegh1bAMiMo55TJde2jJNKX-qjswyf8",
    authDomain: "vcu-cmsc413.firebaseapp.com",
    projectId: "vcu-cmsc413",
    storageBucket: "vcu-cmsc413.appspot.com",
    messagingSenderId: "56247020068",
    appId: "1:56247020068:web:6d2ceb48e0661fbd1306b1",
    measurementId: "G-S5FW4Q4NPJ"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;