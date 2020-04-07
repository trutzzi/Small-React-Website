import firebase from 'firebase/app';
import 'firebase/firestore';
import { fetchData } from '../redux/storeActions';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyAxHkWnt9TlNB3KFO16AEouUgdT8FY7wI4",
    authDomain: "website-a435b.firebaseapp.com",
    databaseURL: "https://website-a435b.firebaseio.com",
    projectId: "website-a435b",
    storageBucket: "website-a435b.appspot.com",
    messagingSenderId: "1008486268694",
    appId: "1:1008486268694:web:2242f9a44ee617f5465a37"
};
// Initialize Firebase
firebase.initializeApp(config);
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOutWithGoogle = () => auth.signOut()
export const addColectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })
    return await batch.commit();
}
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (Error) {
            console.log('Error creating user ', Error)
        }
    }
    return userRef
}
export const convertCollectionsSnapshotToMap = (collection) => {
    let items = []
    const transformCollection = collection.docs.map(doc => {
        const { title, price, selected, count, description } = doc.data();
        items.push(doc.data())
    })
    return (items)
}
export default (firebase);