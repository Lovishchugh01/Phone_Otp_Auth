// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { setAuth } from 'firebase/auth';
import { getMessaging } from 'firebase/messaging';

// export const firebaseConfig = {
//   apiKey: "AIzaSyDkRekhawcYSW3nAQ3KYBkXMaft6-5BYng",
//   authDomain: "swiggy-genie.firebaseapp.com",
//   projectId: "swiggy-genie",
//   storageBucket: "swiggy-genie.appspot.com",
//   messagingSenderId: "996320342233",
//   appId: "1:996320342233:web:9081718b89ecc723614ec8",
//   measurementId: "G-C7B5JMVS2K"
// };
// setAuth(auth, { appVerificationDisabledForTesting: true });
export const firebaseConfig = {
  apiKey: "AIzaSyCNrmRnUL9zqLa2o7KRH54DFG3RndCIaTo",
  authDomain: "zwigato-bd2d4.firebaseapp.com",
  projectId: "zwigato-bd2d4",
  storageBucket: "zwigato-bd2d4.appspot.com",
  messagingSenderId: "1004525776688",
  appId: "1:1004525776688:web:85196390409cc789c6e2f5"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);