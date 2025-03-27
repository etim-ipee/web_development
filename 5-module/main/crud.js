const { error } = require('console');
const express = require('express')
const fs = require('fs');
const { json } = require('stream/consumers');

const app = express()

app.post('/', async (req, res) => {
    const data = req.data;

    if (!data) {
        return res.status(400).json({error: 'No data'})
    }

    if (!data['firstname'] && !data['lastname'] && !data['email']) {
        return res.status(400).json({error: 'Missing credentials'})
    }

    const existingData = await fs.readFileSync('data.json', 'utf8')
    const parseData = JSON.parse(existingData)
    const isDuplicate = parseData.some(item => item.email === data.email)
    if (isDuplicate) {
        return res.status(400),json({error: 'Email already exists'})
    }
    parsedData.push(data)
    await fs.writeFileSync('data.json', JSON.stringify(parsedData, null, 2))

    res.status(201).json({message: 'Data created successfully'})

}) 