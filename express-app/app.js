const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
ures.send("Hello World, we are here for you");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
