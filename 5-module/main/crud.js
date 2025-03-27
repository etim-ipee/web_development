const express = require('express')
const fs = require('fs');
const cors = require('cors')

const app = express()

app.use([
    express.json(),
    express.urlencoded({extended: true}),
    cors()
])

app.post('/', (req, res) => {
    const data = req.body;

    if (!data) {
        return res.status(400).json({error: 'No data'})
    }

    if (!data['firstname'] && !data['lastname'] && !data['email']) {
        return res.status(400).json({error: 'Missing credentials'})
    }

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
})