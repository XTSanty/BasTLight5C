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
 * @param {string} nombre Nombre del cliente
 * @param {string} apellidos Apellidos del cliente
 * @param {string} domicilio Domicilio del cliente
 * @param {string} telefono Número de teléfono del cliente
 * @param {string} tamaño Tamaño de la venta (Pequeño, Mediano, Grande)
 * @param {string} tarjeta Número de tarjeta del cliente
 * @param {string} cvv CVV de la tarjeta
 */
export const saveTask = (nombre, apellidos, domicilio, telefono, tamaño, tarjeta, cvv) =>
    addDoc(collection(db, "Venta"), { nombre, apellidos, domicilio, telefono, tamaño, tarjeta, cvv });

export const onGetTasks = (callback) =>
    onSnapshot(collection(db, "Venta"), callback);

/**
 * Delete a Task from Firestore
 * @param {string} id ID del documento a eliminar
 */
export const deleteTask = (id) => deleteDoc(doc(db, "Venta", id));

export const getTask = (id) => getDoc(doc(db, "Venta", id));

/**
 * Update a Task in Firestore
 * @param {string} id ID del documento a actualizar
 * @param {object} newFields Nuevos campos a actualizar
 */
export const updateTask = (id, newFields) =>
    updateDoc(doc(db, "Venta", id), newFields);

export const getTasks = () => getDocs(collection(db, "Venta"));
