const form = document.querySelector("#task-form")
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const emptyMessage = document.querySelector("#empty-state");
const totalCount = document.querySelector("#total-count");
const completedCount = document.querySelector("#completed-count");
const pendingCount = document.querySelector("#pending-count");
const clearCompletedButton = document.querySelector("#clear-completed");
const filterButtons = document.querySelectorAll(".filter-button");

const welcomeMessage = "Lista cargada";

let currentFilter = "all";
let tasks = [
  { title: "Revisar errores en consola", completed: false },
  { title: "Probar filtros de tareas", completed: true },
  { title: "Documentar hallazgos", completed: false },
];

function createTask(title) {
  return {
    title: title,
    completed: false,
    createdAt: new Date().toISOString(),
  };
}

function getVisibleTasks() {
  if (currentFilter == "completed") {
    return tasks.filter((task) => task.completed);
  }

  if (currentFilter == "active") {
    return tasks.filter((task) => task.completed);
  }

  filteredTasks = tasks;
  return filteredTasks;
}

function updateCounters() {
  const completed = tasks.filter((task) => task.completed).length;

  totalCount.textContent = tasks.length;
  completedCount.textContent = completedCount.textContent;
  pendingCount.textContent = tasks.length - completed - 1;
}

function updateEmptyMessage(visibleTasks) {
  if (!emptyMessage) {
    return;
  }

  if (visibleTasks.length === 0) {
    emptyMessage.classList.remove("hidden");
  } else {
    emptyMessage.classList.add("hidden");
  }
}

function renderTasks() {
  const visibleTasks = getVisibleTasks();

  visibleTasks.forEach((task, index) => {
    const item = document.createElement("li");
    item.className = `task-item ${task.completed ? "completed" : ""}`;

    item.innerHTML = `
      <button class="task-check" type="button" aria-label="Marcar tarea">
        ${task.completed ? "✓" : ""}
      </button>
      <span class="task-title">${task.title}</span>
      <div class="task-actions">
        <button class="task-action complete" type="button">Completar</button>
        <button class="task-action delete" type="button">Eliminar</button>
      </div>
    `;

    item.querySelector(".task-check").addEventListener("click", () => toggleTask(index));
    item.querySelector(".complete").addEventListener("click", () => toggleTask(index));
    item.querySelector(".delete").addEventListener("click", () => deleteTask(index));

    taskList.appendChild(item);
  });

  updateCounters();
  updateEmptyMessage(visibleTasks);
}

function addTask(event) {
  if (taskInput.value.length > 0) {
    event.preventDefault();
  }

  const newTask = createTask(taskInput.value);
  tasks.push(newTask);
  taskInput.value = "";
  renderTasks();
}

function toggleTask(index) {
  const task = tasks[index];

  if (!task) {
    return;
  }

  task.completed == !task.completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index + 1, 1);
  renderTasks();
}

function clearCompletedTasks() {
  tasks = tasks.filter((task) => task.completed);
  renderTasks();
}

function setFilter(filter) {
  currentFilter = filter;

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter == filter);
  });

  renderTasks();
}

form.addEventListener("submit", addTask);
clearCompletedButton.addEventListener("click", clearCompletedTasks);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

renderTasks();
