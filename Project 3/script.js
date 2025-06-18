document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const dueDate = document.getElementById("dueDate");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");
  const clearAllBtn = document.getElementById("clearAll");
  const filterButtons = document.querySelectorAll(".filter");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks(filter = "all") {
    taskList.innerHTML = "";
    const filteredTasks = tasks.filter(task => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    });

    filteredTasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : "";

      li.innerHTML = `
        <span>${task.text} (${task.due})</span>
        <div class="task-buttons">
          <button onclick="toggleComplete(${index})">✔</button>
          <button onclick="deleteTask(${index})">✖</button>
        </div>
      `;

      taskList.appendChild(li);
    });
  }

  window.toggleComplete = function(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks(getActiveFilter());
  };

  window.deleteTask = function(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks(getActiveFilter());
  };

  addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    const due = dueDate.value;

    if (text === "") return alert("Please enter a task");

    tasks.push({ text, due, completed: false });
    taskInput.value = "";
    dueDate.value = "";
    saveTasks();
    renderTasks(getActiveFilter());
  });

  clearAllBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all tasks?")) {
      tasks = [];
      saveTasks();
      renderTasks(getActiveFilter());
    }
  });

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderTasks(button.dataset.filter);
    });
  });

  function getActiveFilter() {
    return document.querySelector(".filter.active").dataset.filter;
  }

  renderTasks();
});