const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'Alice'},
    { id: 2, name: 'Bob'},
    { id: 3, name: 'Steve'}
];

// **Create a User**
app.post('/users', (req, res) => {
    const user = { id: users.length + 1, name: req.body.name};
    users.push(user);
    res.status(201).json(user);
});

// **Read Users**
app.get('/users', (req, res) => {
    res.json(users);
});

// **Update a User**
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.name = req.body.name;
    res.json(user);
});

// **Delete a User**
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: 'User deleted' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
