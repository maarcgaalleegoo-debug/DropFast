import { auth, db } from './firebase.js';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';
import { doc,setDoc,getDoc } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';
const ADMIN='maarcgaalleegoo@gmail.com';
window.loginEmail=async()=>{await signInWithEmailAndPassword(auth,email.value,password.value);location.href='dashboard.html';}
window.registerEmail=async()=>{const r=await createUserWithEmailAndPassword(auth,email.value,password.value);const a=email.value===ADMIN;await setDoc(doc(db,'users',r.user.uid),{email:email.value,tier:a?'pro':'normal',role:a?'admin':'user'});location.href='dashboard.html';}
window.loginGoogle=async()=>{const r=await signInWithPopup(auth,new GoogleAuthProvider());const ref=doc(db,'users',r.user.uid);const s=await getDoc(ref);if(!s.exists()){const a=r.user.email===ADMIN;await setDoc(ref,{email:r.user.email,tier:a?'pro':'normal',role:a?'admin':'user'});}location.href='dashboard.html';}