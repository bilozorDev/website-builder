// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgU-2d31vrA9zPiB9R7eqkxOeciVIfEhs",
  authDomain: "website-builder-74871.firebaseapp.com",
  projectId: "website-builder-74871",
  storageBucket: "website-builder-74871.appspot.com",
  messagingSenderId: "1038753002066",
  appId: "1:1038753002066:web:c2dbc27db2aaaaba48658b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
