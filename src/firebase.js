import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyCmDGMqRWlGVVwWsTmgg4BjyS7du7_ery0",

    authDomain: "tanvir-c6798.firebaseapp.com",

    projectId: "tanvir-c6798",

    storageBucket: "tanvir-c6798.firebasestorage.app",

    messagingSenderId: "74092287585",

    appId: "1:74092287585:web:48827f0b2f24cc6f327c20"

}


const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)