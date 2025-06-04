const express = require('express')
const fs = require('fs');
const cors = require('cors')

const app = express()

app.use(express.json());


// POST Endpoint-Create new record
app.post('/create', async (req, res) => {
    const data = req.body;

    console.log(data)

const app = express()

app.use([
    express.json(),
    express.urlencoded({extended: true}),
    cors()
])

app.post('/', async (req, res) => {
    const data = req.body;

    if (!data) {
        return res.status(400).json({error: 'No data'})
    }

    if (!data['firstname'] && !data['lastname'] && !data['email']) {
        return res.status(400).json({error: 'Missing credentials'})
    }

    
    let existingData = [];
if (fs.existsSync('data.json')) {
    existingData = JSON.parse(await fs.promises.readFile('data.json', 'utf8'));
} else {
    fs.writeFileSync('data.json',JSON.stringify([], null, 2));
}
    res.status(201).json({message: 'Data created successfully'})
})

// GET Endpoint - Search record
app.get('/search', async (req, res) => {
    const { email } = req.query;
    
    if (!email) {
        return res.status(400).json({ error: 'Email parameter is required' });
    }

    const existingData = await fs.readFileSync('data.json', 'utf8');
    const parsedData = JSON.parse(existingData);
    const record = parsedData.find(item => item.email === email);

    if (!record) {
        return res.status(404).json({ error: 'Record not found!' });
    }

    res.status(200).json(record);
});

// PUT Endpoint - Update record
app.put('/update', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email parameter is required' });
    }

    const existingData = await fs.readFileSync('data.json', 'utf8');
    const parsedData = JSON.parse(existingData);
    const index = parsedData.findIndex(item => item.email === email);

    if (index === -1) {
        return res.status(404).json({ error: 'No such record found!' });
    }

    // Update the record
    parsedData[index] = { ...parsedData[index], ...req.body };

    await fs.writeFileSync('data.json', JSON.stringify(parsedData, null, 2));
    res.status(200).json({ message: 'Record updated successfully' });
});

// DELETE Endpoint - Delete record
app.delete('/delete', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email parameter is required' });
    }

    const existingData = await fs.readFileSync('data.json', 'utf8');
    const parsedData = JSON.parse(existingData);
    const filteredData = parsedData.filter(item => item.email !== email);

    if (filteredData.length === parsedData.length) {
        return res.status(404).json({ error: 'Record not found!' });
    }

    await fs.writeFileSync('data.json', JSON.stringify(filteredData, null, 2));
    res.status(200).json({ message: 'Record deleted successfully' });
});

app.get('/', (req, res) => {
    res.send("Hello world! Welcome")
})
app.use([
    express.urlencoded({extended: true})
])
app.listen(6000, () => {
    console.log('Server is running on port 6000')


    let parsedData = []

    try {
        const existingData = fs.readFileSync('data.json', 'utf8')
        parsedData = JSON.parse(existingData)
        const isDuplicate = parsedData.some(item => item.email === data.email)
        if (isDuplicate) {
            return res.status(400),json({error: 'Email already exists'})
        }
       parsedData.push(data)
       fs.writeFileSync('data.json', JSON.stringify(parsedData, null, 2))
       res.status(201).json({message: 'Data created successfully'})

    } catch (error) {

        fs.writeFileSync('data.json', JSON.stringify(parsedData, null, 2))

        res.status(201).json({message: 'Data created successfully'})
    }

})


app.listen(5000, () => {
    console.log('Server is running')
})})