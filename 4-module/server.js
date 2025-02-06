const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 5500;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/register', (req, res) => {
  const formData = req.body;

  // Save form data to a file
  fs.writeFile('formData.json', JSON.stringify(formData, null, 2), (err) => {
    if (err) {
      return res.status(500).send('Server error');
    }
    res.send('Form data saved');
  });
});

app.get('/register', (req, res) => {
  // Retrieve form data from the file
  fs.readFile('formData.json', (err, data) => {
    if (err) {
      return res.status(500).send('Server error');
    }
    res.send(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
