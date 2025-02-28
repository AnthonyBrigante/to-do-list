//array to store tasks
let tasks = []

//add event listener to add task to the add tsk buton
document.getElementById('addTaskButton').addEventListener('click', function () {
    //storing text valuse from input box as a varrible task input
    let taskInput = document.getElementById('taskInput').value
//checking truthy falsy on varriable
    if (taskInput) {
//if truthy pushes the value to the end of list
        tasks.push(taskInput)
        //clears task input after button is clicked 
        document.getElementById('taskInput').value = ''

//
        displayTasks()
    }
})



//funtion to display tasks from the bar o the UL
function displayTasks () {
    //grabbing the unordered list from the HTML
    let taskList = document.getElementById('taskList')

    //clear existing list before changing it 
    taskList.innerHTML = ''

    //loop through each task in the array and create a list item
    tasks.forEach((task, index) => {
        //create nw list element for each task
        let li = document.createElement('li')

        //
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )

        //set inner html with <li> elements with task text and remove button
        li.innerHTML = `${task} <buttons class= 'btn btn-dark btn-sm' onclick='removeTask(${index})'> √ </button>`

//append new task to tasklist
taskList.appendChild(li)
})
}

//function to remove a task with the check mark
function removeTask (index){
    tasks.splice(index, 1)


   //call the functoin to update the list display
   displayTasks()

}
document.getElementById('clearTask').addEventListener('click', function () {
    //Empty array
    tasks = []
    //Updates array
    displayTasks()
})
