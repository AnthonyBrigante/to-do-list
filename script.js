// Array to store tasks
let tasks = [];

// Set to keep track of completed tasks
let completedTasks = new Set();

// Function to add a task
function addTask() {
    // Get the task input value and remove extra spaces
    let taskInput = document.getElementById('taskInput').value.trim();

    // Check if the input is not empty
    if (taskInput) {
        // Add the task to the array
        tasks.push(taskInput);
        // Clear the input field after adding the task
        document.getElementById('taskInput').value = '';
        // Update the task list display
        displayTasks();
    }
}

// Function to display the tasks in the list
function displayTasks() {
    // Get the unordered list (UL) where tasks will be displayed
    let taskList = document.getElementById('taskList');
    // Get the task counter element
    let taskCounter = document.getElementById('taskCounter');

    // Clear the current list to prevent duplicates
    taskList.innerHTML = '';

    // Loop through each task in the tasks array and create list items
    tasks.forEach((task, index) => {
        // Create a new <li> element for each task
        let li = document.createElement('li');

        // Add Bootstrap classes for styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center',
            'task-item'
        );

        // Check if the task is marked as completed and apply styles
        if (completedTasks.has(index)) {
            li.classList.add("completed");
        }

        // Set the inner HTML for the list item, including buttons for completion and deletion
        li.innerHTML = `
            <span>${task}</span> 
            <div>
                <!-- Button to mark task as completed -->
                <button class='btn btn-success btn-sm me-2' onclick='toggleComplete(${index})'>✔</button>
                <!-- Button to remove task -->
                <button class='btn btn-danger btn-sm' onclick='removeTask(${index})'>✖</button>
            </div>
        `;

        // Append the new task item to the task list
        taskList.appendChild(li);
    });

    // Update the task counter display
    taskCounter.textContent = `Tasks: ${tasks.length}`;
}

// Function to mark a task as completed or uncompleted
function toggleComplete(index) {
    // If the task is already marked as completed, remove it from the completed set
    if (completedTasks.has(index)) {
        completedTasks.delete(index);
    } else {
        // Otherwise, add it to the completed set
        completedTasks.add(index);
    }
    // Refresh the displayed task list to reflect the changes
    displayTasks();
}

// Function to remove a task from the list
function removeTask(index) {
    // Remove the task from the array using its index
    tasks.splice(index, 1);
    // Also remove it from the completed tasks set (if it was marked as completed)
    completedTasks.delete(index);
    // Refresh the displayed task list
    displayTasks();
}

// Event listener for the "Clear All" button to remove all tasks
document.getElementById('clearTask').addEventListener('click', function () {
    // Empty the task array
    tasks = [];
    // Clear the completed tasks set
    completedTasks.clear();
    // Refresh the displayed task list
    displayTasks();
});

// Event listener for the "Add Task" button to trigger the addTask function
document.getElementById('addTaskButton').addEventListener('click', addTask);

// Event listener for the "Enter" key to also add tasks when pressed
document.getElementById('taskInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
