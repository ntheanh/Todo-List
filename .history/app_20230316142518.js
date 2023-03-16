window.addEventListener("load", () => {
  const form = document.querySelector("#new-todo-form");
  const input = document.querySelector("#new-todo-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = input.value;

    if (!todo) {
      alert("Vui long nhap cong viec can lam");
      return;
    }

    const todo_el = document.createElement("div");
    todo_el.classList.add("task");

    const todo_content = document.createElement("div");
    todo_content.classList.add("content");

    todo_el.appendChild(todo_content);

    const todo_input = document.createElement("input");
    todo_input.classList.add("content_input");
    todo_input.type = "text";
    todo_input.value = todo;

    todo_input.setAttribute("readonly", "readonly");

    todo_content.appendChild(todo_input);

    const todo_actions = document.createElement("div");
    todo_actions.classList.add("actions");

    const todo_edit = document.createElement("button");
    todo_edit.classList.add("edit");
    todo_edit.innerText = "Sửa";

    const todo_delete = document.createElement("button");
    todo_delete.classList.add("delete");
    todo_delete.innerText = "Xóa";

    todo_actions.appendChild(todo_edit);
    todo_actions.appendChild(todo_delete);

    todo_el.appendChild(todo_actions);

    list_el.appendChild(todo_el);

    input.value = "";

    todo_edit.addEventListener("click", (e) => {
      if (todo_edit.innerText.toLowerCase() === "edit") {
        todo_input.removeAttribute("readonly");
        todo_input.focus();
        todo_edit.innerText = "Lưu";
      } else {
        todo_input.setAttribute("readonly", "readonly");
        todo_edit.innerText = "Sửa";
      }
    });

    // todo_edit.addEventListener("click", (e) => {
    //   if (todo_edit.innerText.toLowerCase() == "edit") {
    //     todo_edit.innerText = "Save";
    //     todo_input.removeAttribute("readonly");
    //     todo_input.focus();
    //   } else {
    //     todo_edit.innerText = "Edit";
    //     todo_input.setAttribute("readonly", "readonly");
    //   }
    // });
  });
});
