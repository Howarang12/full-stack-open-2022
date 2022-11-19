const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

if (process.argv.length > 5) {
  console.log(
    "Please provide maximum of 3 arguments: node mongo.js <password> <name> <number>"
  )
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://Howarang:${password}@cluster0.5ayq4vq.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const person = new Person({
  name: name,
  number: number
})

if(password && name && number) {  
  return person.save().then(() => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}

if(password && !name && !number) {
  Person.find({}).then(persons => {
    console.log('phonebook')
    persons.forEach(person => console.log(`${person.name} ${person.number}`))
    mongoose.connection.close()
  })
}
    



