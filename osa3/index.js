const express = require('express')
const app = express()

let persons = [
    {
        name: 'Aaaaa Bbbbbbb',
        number: '1234',
        id: 1
    },
    {
        name: 'Bbbbb Ccccccc',
        number: '2345',
        id: 2,
    },
    {
        name: 'Ccccc Ddddddd',
        number: '3456',
        id: 3
    },
    {
        name: 'Ddddd Eeeeeee',
        number: '4567',
        id: 4
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})