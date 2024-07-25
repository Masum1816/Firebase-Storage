// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPnF0TrA8SgtggN5L4mGSWW2beydH8OZ8",
  authDomain: "fir-storage-c68f6.firebaseapp.com",
  projectId: "fir-storage-c68f6",
  storageBucket: "fir-storage-c68f6.appspot.com",
  messagingSenderId: "1053821064552",
  appId: "1:1053821064552:web:883cd072b75930933e32dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

