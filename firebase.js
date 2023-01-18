// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj_i0GtWX97Am1s_3re0w3T9fGH4NeVkw",
  authDomain: "agri-zone-bd781.firebaseapp.com",
  projectId: "agri-zone-bd781",
  storageBucket: "agri-zone-bd781.appspot.com",
  messagingSenderId: "126483597344",
  appId: "1:126483597344:web:b5b9298ab4e24161349445",
  measurementId: "G-KRBM2HSLG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
