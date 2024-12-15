// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
// import { auth } from "./firebaseConfig";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHtQr76Qdtbuc0BiAfE6203kHWV77WDmU",
  authDomain: "movie-recommendation-9881e.firebaseapp.com",
  databaseURL: "https://movie-recommendation-9881e-default-rtdb.firebaseio.com",
  projectId: "movie-recommendation-9881e",
  storageBucket: "movie-recommendation-9881e.firebasestorage.app",
  messagingSenderId: "862125779983",
  appId: "1:862125779983:web:b9639f6c386b6762f1877a",
  measurementId: "G-Z01YXRQY3R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const dbRef = (path) => ref(database, path);
