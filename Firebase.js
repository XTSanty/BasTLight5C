// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

//Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcLZsgg3W-nN55aEStaPyocrsiAmXNrtE",
    authDomain: "sergiosantiago5c.firebaseapp.com",
    projectId: "sergiosantiago5c",
    storageBucket: "sergiosantiago5c.appspot.com",
    messagingSenderId: "85048059545",
    appId: "1:85048059545:web:858f00a050f9a2bc8dfa08"
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the task
 */
export const saveTask = (title, description) =>
    addDoc(collection(db, "usuario"), {title, description});

export const onGetTasks = (callback) =>
    onSnapshot(collection(db, "usuario"), callback);

/**
 * 
/**
 * Delete a Task from Firestore
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "usuario", id));

export const getTask = (id) => getDoc(doc(db, "usuario", id));

export const updateTask = (id, newFields) =>
    updateDoc(doc(db, "usuario", id), newFields);

export const getTasks = () => getDocs(collection(db, "usuario"));