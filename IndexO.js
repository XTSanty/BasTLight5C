import { onGetTasks, saveTask, deleteTask, getTask, updateTask, getTasks } from "./FirebaseO.js";

const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async (e) => {
    onGetTasks((querySnapshot) => {
    });
});

taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = taskForm["task-name"].value;
    const apellidos = taskForm["task-lastname"].value;
    const domicilio = taskForm["task-address"].value;
    const telefono = taskForm["task-phone"].value;
    const tamaño = taskForm["task-size"].value;
    const tarjeta = taskForm["task-card"].value;
    const cvv = taskForm["task-cvv"].value;

    try {
        await saveTask(title, apellidos, domicilio, telefono, tamaño, tarjeta, cvv);

        taskForm.reset();
        taskForm["task-name"].focus();
    } catch (error) {
        console.log(error);
    }
});
