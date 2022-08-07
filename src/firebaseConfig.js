import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCn4TSBm8U3Qw7qE5SmNdSKZBj7aTD73DI",
  authDomain: "wonodoyo-9d84a.firebaseapp.com",
  projectId: "wonodoyo-9d84a",
  storageBucket: "wonodoyo-9d84a.appspot.com",
  messagingSenderId: "119161556461",
  appId: "1:119161556461:web:39720fc1090cbd501d6be4",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
