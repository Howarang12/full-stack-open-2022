require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const Note = require('./models/note')
const errorHandler = require('./middleware/errorHandler')
const unknownEndpoint = require('./middleware/unknownEndpoint')
// const errorHandler = (error, request, response, next) => {
//   console.error(error.message)
//   console.log('error')

//   if (error.name === 'CastError') {
//     return response.status(400).send({ error: 'malformatted id' })
//   } 

//   next(error)
// }

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/notes', (req, res) => {
  Note.find({}).then(notes => {
    res.json(notes)
  })
})

app.use(unknownEndpoint)
app.use(errorHandler)

app.get('/api/notes/:id', (req, res, next) => {
  Note.findById(req.params.id)
  .then(note => {
    if(note){
      res.json(note)
    } else {
      res.status(404).end()
    }
  })
  .catch(error => next(error))
})


app.post('/api/notes', (req, res) => {
  const body = req.body

  if (body.content === undefined) {
    return res.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  })

  note.save().then(savedNote => {
    res.json(savedNote)
  })
})

app.delete('/api/notes/:id', (req, res, next) => {
  Note.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/notes/:id', (req, res, next) => {
  const body = req.body

  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(req.params.id, note, { new: true })
    .then(updatedNote => {
      res.json(updatedNote)
    })
    .catch(error => next(error))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
