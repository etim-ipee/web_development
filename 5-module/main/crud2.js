const express = require('express');
const app = express();
app.use(express.json());

app.listen(3500, () => {
    console.log('Server running on port 3500');
});

const items = [];

app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).send(item);
});

app.get('/items', (req, res) => {
    res.send(items);
});

app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;
    items[id] = updatedItem;
    res.send(updatedItem);
});

app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    items.splice(id, 1);
    res.send({ message: 'Item deleted' });
});
