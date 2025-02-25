async function fetchTodos() {
    const response = await fetch('/todos');
    const todos = await response.json();
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.textContent = todo.title;
      todoList.appendChild(li);
    });
  }

  async function addTodo() {
    const newTodoInput = document.getElementById('new-todo');
    const newTodo = {
      id: Date.now(),
      title: newTodoInput.value,
      completed: false
    };

    await fetch('/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    });

    newTodoInput.value = '';
    fetchTodos();
  }

  fetchTodos();