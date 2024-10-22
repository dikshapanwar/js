// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add task to the list
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value;

    if (taskText !== "") {
        const li = document.createElement('li');
        li.innerText = taskText;

        // Add a "Remove" button to each task
        const removeButton = document.createElement('button');
        removeButton.innerText = "Remove";
        removeButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field after adding
        taskInput.value = '';
    }
});
