import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Constants from 'expo-constants';

// Your Firebase config (replace with actual values)
const firebaseConfig = {
    apiKey: Constants.expoConfig?.extra?.firebaseApiKey,
    authDomain: Constants.expoConfig?.extra?.firebaseAuthDomain,
    projectId: Constants.expoConfig?.extra?.firebaseProjectId,
    storageBucket: Constants.expoConfig?.extra?.firebaseStorageBucket,
    messagingSenderId: Constants.expoConfig?.extra?.firebaseMessagingSenderId,
    appId: Constants.expoConfig?.extra?.firebaseAppId,
};

// Ensure Firebase is only initialized once
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Firebase Authentication instance
const auth = getAuth(app);

export { auth, onAuthStateChanged };
