import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3aoTq8xLGhpAAySNPpcK7f5PqHBcLINE",
  authDomain: "city-cell.firebaseapp.com",
  projectId: "city-cell",
  storageBucket: "city-cell.appspot.com",
  messagingSenderId: "596762703290",
  appId: "1:596762703290:web:e42facf752d5dbd7695983"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}


