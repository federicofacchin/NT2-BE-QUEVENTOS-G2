import Constants from 'expo-constants';
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

// Inicializa la conexión firebase con nuestro proyecto
export const firebaseApp = initializeApp({
    apiKey: Constants.manifest.extra.REACT_APP_FIREBASE_API_KEY,
    authDomain: Constants.manifest.extra.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: Constants.manifest.extra.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: Constants.manifest.extra.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: Constants.manifest.extra.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: Constants.manifest.extra.REACT_APP_FIREBASE_APP_ID
})

const db = getFirestore(firebaseApp)
const auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage)
  })

export {
    auth, db
}