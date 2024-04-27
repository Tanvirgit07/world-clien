// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV8eYzmgMvNPxSMhI6bFns6ozKbLURp68",
  authDomain: "world-explore-client.firebaseapp.com",
  projectId: "world-explore-client",
  storageBucket: "world-explore-client.appspot.com",
  messagingSenderId: "40762195808",
  appId: "1:40762195808:web:560d533b439b130c1e2805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;