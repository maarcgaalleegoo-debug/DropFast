import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';
const firebaseConfig={apiKey:'AIzaSyA0cBkVJrd8N2hLKocmD2SVl8bIibPfwyc',authDomain:'dropfast-f68b6.firebaseapp.com',projectId:'dropfast-f68b6'};
export const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);