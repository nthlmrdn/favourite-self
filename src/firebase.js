import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8-HG7n5K9GN2Illx7tBAGhiIteg_oako",
    authDomain: "favourite-self.firebaseapp.com",
    projectId: "favourite-self",
    storageBucket: "favourite-self.appspot.com",
    messagingSenderId: "575264149318",
    appId: "1:575264149318:web:3f4819d82f5ecfc3b85f47",
    measurementId: "G-Y53FGBEF2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);