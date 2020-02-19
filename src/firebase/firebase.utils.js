import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
{
    apiKey: "AIzaSyBTBUkf27kYgbeg5nWuDN6H7PL07v4Z5CY",
    authDomain: "chris-clothing.firebaseapp.com",
    databaseURL: "https://chris-clothing.firebaseio.com",
    projectId: "chris-clothing",
    storageBucket: "chris-clothing.appspot.com",
    messagingSenderId: "1024949576736",
    appId: "1:1024949576736:web:306034476d52bcd059c845"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'} );
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;