import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
const config = {
  apiKey: "AIzaSyBKkraFyWw0s_XNF-uqBiprcw26Y1cWgq0",
  authDomain: "crwn-db-20bfa.firebaseapp.com",
  projectId: "crwn-db-20bfa",
  storageBucket: "crwn-db-20bfa.appspot.com",
  messagingSenderId: "120364692558",
  appId: "1:120364692558:web:f0b5298ae3af62a57f7f1f",
  measurementId: "G-SDTDXE3178",
};
const app = initializeApp(config);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
