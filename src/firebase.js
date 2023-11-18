import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
		apiKey: "AIzaSyChKh7NTfhrO3W8b-RGduOxdoIEpMXRg9w",
		authDomain: "apicakesite.firebaseapp.com",
		projectId: "apicakesite",
		storageBucket: "apicakesite.appspot.com",
		messagingSenderId: "716513426723",
		appId: "1:716513426723:web:0d432bba8bb6476edca096",
		measurementId: "G-QLGSWWPYL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
const analytics = getAnalytics(app);