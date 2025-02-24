const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


let todos = [];

// Create a new to-do item
app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

// Get all to-do items
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Update a to-do item
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
    todos[index] = req.body;
    res.json(todos[index]);
  } else {
    res.status(404).send('To-do item not found');
  }
});

// Delete a to-do item
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  todos = todos.filter((todo) => todo.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
