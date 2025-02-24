//array to store tasks
let tasks = []

//add event listener to add task to the add tsk buton
document.getElementById('addTaskButton').addEventListener('click', function () {
    //storing text valuse from input box as a varrible task input
    let taskInput = document.getElementById('taskInput').value

    if (taskInput) {

        tasks.push(taskInput)
        document.getElementById('taskInput').value = ''


        displayTasks()
    }
})