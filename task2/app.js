const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span><button onclick="removeTask(this)">X</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
    updateStorage();
  }
}

function removeTask(button) {
  button.parentElement.remove();
  updateStorage();
}

function updateStorage() {
  const tasks = Array.from(document.querySelectorAll('#taskList span')).map(span => span.textContent);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${task}</span><button onclick="removeTask(this)">X</button>`;
    taskList.appendChild(li);
  });
}

function clearAllTasks() {
  taskList.innerHTML = '';
  localStorage.removeItem('tasks');
}

addTaskBtn.addEventListener('click', addTask);
clearAllBtn.addEventListener('click', clearAllTasks);
document.addEventListener('DOMContentLoaded', loadTasks);
