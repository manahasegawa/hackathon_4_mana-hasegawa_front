// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyA4sXWfD3x-bjsQfyBLuChzEs2iOJloOIA",
        authDomain: "term4-mana-hasegawa.firebaseapp.com",
        projectId: "term4-mana-hasegawa",
        storageBucket: "term4-mana-hasegawa.appspot.com",
        messagingSenderId: "566283853541",
        appId: "1:566283853541:web:2aa327d4e47a03fd553e0c"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const fireauth = getAuth(app);