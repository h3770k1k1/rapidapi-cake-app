import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
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
	measurementId: "G-QLGSWWPYL7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
