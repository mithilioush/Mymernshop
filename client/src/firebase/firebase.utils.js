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

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {});
}

export const getCurrentUser = () => (new Promise((res, rej) => {
    const unSubscribe = auth.onAuthStateChanged(userAuth => {
        unSubscribe();
        res(userAuth);
    }, rej)
}))

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const storage = firebase.storage();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const firestore = firebase.app().firestore();
export default firebase;












// export const addCollectionAndDocument = async (key, objectArray) => {
//     const collectionRef = firebase.app().firestore().collection(key);

//     const batch = firebase.app().firestore().batch()
//     objectArray.forEach(obj => {
//         const newDocRef = collectionRef.doc()
//         // console.log(newDocRef);
//         batch.set(newDocRef, obj)
//     });
//     try {
//         const promiss = await batch.commit()
//         console.log(promiss, "Sucessfull");
//         return promiss;
//     } catch (error) {
//         console.error(error);
//         console.log('Failed');

//     }

// }
