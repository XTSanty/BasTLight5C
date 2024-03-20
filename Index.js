import { onGetTasks, saveTask, deleteTask, getTask, updateTask, getTasks } from "./Firebase.js";

const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async (e) => {
    onGetTasks((querySnapshot) => {
        // Aquí ya no se agregan los contenedores al tasksContainer
    });
});

taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = taskForm["task-title"].value;
    const description = taskForm["task-description"].value;

    try {
        if (!title || !description) {
            // Si no hay datos en el formulario, muestra un mensaje de alerta
            alert("Llene el formulario");
            return;
        }

        if (!editStatus) {
            await saveTask(title, description);
        } else {
            await updateTask(id, {
                title: title,
                description: description,
            });

            editStatus = false;
            id = "";
            taskForm["btn-task-form"].innerText = "Save";
        }

        // Muestra un mensaje de alerta cuando se agrega un usuario
        alert("Usuario Registrado Correctamente");

        taskForm.reset();
        taskForm["task-title"].focus();
    } catch (error) {
        console.log(error);
    }
});
