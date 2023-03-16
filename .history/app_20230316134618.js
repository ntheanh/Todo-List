window.addEventListener("load", () => {
  const form = document.querySelector("#new-todo-form");
  const input = document.querySelector("#new-todo-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;
    console.log(task);

    if (!task) {
      alert("Please enter a task");
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    task_content_el.innerText = task;

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_content_el.classList.add("content_input");
    task_content_el.type = "text";
    task_content_el.value = "My task";
    task_content_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    list_el.appendChild(task_el);
  });
});