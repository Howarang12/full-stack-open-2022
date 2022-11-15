const express = require('express')
const app = express()

const PORT = 3001

app.use(express.json())

let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/', (req, res) => {
  res.send('phonebook')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)

  if(person) {
    res.json(person)
  } else {
    res.json({msg: 'no person found'}).status(404).end()
  }
  
})

app.get('/info', (req, res) => {
  res.send(`
    <p> Phonebook has info for ${persons.length} people </p>
    <p> ${Date(Date.now())} </p>
  `)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const body = req.body
  console.log(body)

  if(!body.name || !body.number){
    return res.status(400).json({err: 'name or number cannot be empty'})
  }

  if(persons.find(person => person.name === body.name)){
    return res.status(400).json({err: 'name already exists'})
  }

  const person = {
   name: body.name,
   number: body.number,
   id: Math.floor(Math.random() * 10000)
  }

  persons = [...persons, person]
  res.json(person)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))