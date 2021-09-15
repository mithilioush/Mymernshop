import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAzzMzttYfeKlJ0lqNonxeDaB529pV29JQ",
    authDomain: "react-clothing-71f4b.firebaseapp.com",
    projectId: "react-clothing-71f4b",
    storageBucket: "react-clothing-71f4b.appspot.com",
    messagingSenderId: "115203249976",
    appId: "1:115203249976:web:54b7c3aee1aedb97ed53cd",
    measurementId: "G-ZWMG8RPS58"
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firebase.app().firestore().doc(`users/${userAuth.uid}`);
    const shnapShot = userRef.get();

    if (!shnapShot.exists) {
        const { displayName, email } = userAuth;
        console.log(userAuth);
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error in creating user " + error.message);
        }
    }
    return userRef;
}


// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;