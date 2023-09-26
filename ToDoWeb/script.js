document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const dueDateInput = document.getElementById("due-date");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const dueDate = dueDateInput.value;

        if (taskText !== "" && dueDate !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <span class="due-date">${dueDate}</span>
                <button class="delete-button">Delete</button>
            `;

            taskList.appendChild(listItem);
            taskInput.value = "";
            dueDateInput.value = "";

            
            const deleteButton = listItem.querySelector(".delete-button");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(listItem);
            });
        }
    });
});
