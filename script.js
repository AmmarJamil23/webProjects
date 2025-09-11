const taskInput = document.querySelector(".task-input");
const addTaskBtn = document.querySelector(".add-task-button");
const taskList = document.querySelector(".task-list");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim(); 

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.style.marginRight = "5px";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";

  completeBtn.addEventListener("click", () => {
    span.classList.toggle("completed"); 
  });

  deleteBtn.addEventListener("click", () => {
    li.remove(); 
  });

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
});
