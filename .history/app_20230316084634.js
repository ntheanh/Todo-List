window.addEventListener("load", function () {
  const form = document.querySelector("new-todo-form");
  const input = document.querySelector("#new-todo-input");
  const task_list = document.querySelector("#task-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;

    if (!task) {
      alert("Please enter a task");
      return;
    } else {
      console.log(success);
    }
    console.log(task);
  });
});
