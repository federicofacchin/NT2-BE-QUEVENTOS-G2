import Constants from 'expo-constants';

import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore, collection, getDoc } from "firebase/firestore"

// Inicializa la conexión firebase con nuestro proyecto
export const firebaseApp = initializeApp({
    apiKey: Constants.manifest.extra.REACT_APP_FIREBASE_API_KEY,
    authDomain: Constants.manifest.extra.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: Constants.manifest.extra.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: Constants.manifest.extra.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: Constants.manifest.extra.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: Constants.manifest.extra.REACT_APP_FIREBASE_APP_ID
    //apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    //authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    //projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    //storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    //messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    //appId: process.env.REACT_APP_FIREBASE_APP_ID
})


// Exporta esta constante para usarla en la vista del login
export const auth = getAuth(firebaseApp)

const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)