require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/Person')

const PORT = process.env.PORT || 3001

morgan.token('body', req => {
  return JSON.stringify(req.body)
})


app.use(express.json())
app.use(express.static('build'))
// app.use(requestLogger)
// app.use(unknownEndpoint)
app.use(morgan('tiny'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())


app.get('/', (req, res) => {
  res.send('phonebook')
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id).then(person => {
    res.json(person)
  })
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

  if (body.name === undefined || body.number === undefined) {
    console.log('err')
    return res.status(400).json({ err: 'fields cannot be empty' })
  }

  const newPerson = new Person({
    name: body.name,
    number: body.number
  })

  newPerson.save().then(savedPerson => {
    res.json(savedPerson)
  })

})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))