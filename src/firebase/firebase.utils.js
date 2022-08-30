import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import signIn from"firebase/auth";







const Config = {
  apiKey: "AIzaSyBKkraFyWw0s_XNF-uqBiprcw26Y1cWgq0",
  authDomain: "crwn-db-20bfa.firebaseapp.com",
  projectId: "crwn-db-20bfa",
  storageBucket: "crwn-db-20bfa.appspot.com",
  messagingSenderId: "120364692558",
  appId: "1:120364692558:web:f0b5298ae3af62a57f7f1f",
  measurementId: "G-SDTDXE3178"
};







export const createUserProfileDocument = async (
  userAuth, additionalData
) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


firebase.initializeApp(Config);
export const auth = firebase.auth();
export const db = firebase.firestore();








export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});



export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.log(error);
    });
};
