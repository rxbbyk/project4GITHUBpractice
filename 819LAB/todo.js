window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const addBtn = document.getElementById("add-btn");
   const taskInput = document.getElementById("new-task");

   addBtn.addEventListener("click", addBtnClick);
   taskInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });
}

function addBtnClick() {
   const taskInput = document.getElementById("new-task");
   const newTask = taskInput.value.trim();

   if (newTask !== "") {
      addTask(newTask);
      taskInput.value = "";
      taskInput.focus();
   }
}

function addTask(task) {
   const taskList = document.querySelector("ol");
   const newTaskItem = document.createElement("li");
   newTaskItem.innerHTML = `<span class="task-text">${task}</span><button class="done-btn">&#10006;</button>`;

   taskList.appendChild(newTaskItem);

   const removeButton = newTaskItem.querySelector(".done-btn");
   removeButton.addEventListener("click", removeTask);
}

function removeTask(event) {
   const taskItem = event.target.parentNode;
   taskItem.remove();
}

