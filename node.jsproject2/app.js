const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const todos = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/addtodo', (req, res) => {
  const newTodo = req.body.todo;
  todos.push(newTodo);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Todo app listening at http://localhost:${port}`);
});
