window.addEventListener("load", function () {
  const form = document.querySelector("new-todo-form");
  const input = document.querySelector("#new-todo-input");
  const task_list = document.querySelector("#task-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const task = input.value;
    console.log(task);
  });
});
