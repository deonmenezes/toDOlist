
  

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBd-v5pdKyMHD5_-4aVSMDdTI_5UouN1JQ",
    authDomain: "netninja-3f8dd.firebaseapp.com",
    projectId: "netninja-3f8dd",
    storageBucket: "netninja-3f8dd.appspot.com",
    messagingSenderId: "164091742470",
    appId: "1:164091742470:web:5c627a9626807e61f0f687",
    measurementId: "G-6F23CR0VQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);