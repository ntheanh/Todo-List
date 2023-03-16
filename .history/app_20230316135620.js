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

    const todo_content= document.createElement("div");
    todo_content.classList.add("content")
    todo_content.innerText = todo;

    const todo_input = document.createElement("input");
    todo_input.type = "text"
    todo_input.classList.add("content_input")
    todo_input.value = todo;
    todo_input.setAttribute = ("readonly", "readonly")

    todo_el.appendChild(todo_content);

    list_el.appendChild(todo_el);


        
    }
  });
});
