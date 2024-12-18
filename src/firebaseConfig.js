import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "movie-recommendation-9881e.firebaseapp.com",
    databaseURL: "https://movie-recommendation-9881e-default-rtdb.firebaseio.com",
    projectId: "movie-recommendation-9881e",
    storageBucket: "movie-recommendation-9881e.firebasestorage.app",
    messagingSenderId: "862125779983",
    appId: "1:862125779983:web:b9639f6c386b6762f1877a",
    measurementId: "G-Z01YXRQY3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

// Create a reference function
export const dbRef = (path) => ref(database, path);

const db = getFirestore(app);

export {db};
