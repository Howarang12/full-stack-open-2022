import { useState, useEffect} from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import List from './components/List'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    phonebookService
      .getAll()
      .then(allPeople => setPersons(allPeople))
  }, [])

  const handleFormSubmission = (e) => {
    e.preventDefault()
    if(persons.some(person => person.name === newName)){ //update phone number if name exists
      const person = persons.find(p => p.name === newName)
      const updatedPerson = {...person, number: newNumber}

      phonebookService
        .update(person.id, updatedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(p => p.name !== newName ? p : returnedPerson))
          setNewName('')
          setNewNumber('')
        })

    } else { //create new person if name does not exist

      const newPerson = {name: newName, number: newNumber}

      phonebookService
        .addPerson(newPerson)
        .then(newPerson => {
          setPersons([...persons, newPerson])
          setNewName('')
          setNewNumber('')
        })
        .catch(err => console.log(err))
    }
  }

  const handleDelete = (id) => {
    phonebookService
      .deletePerson(id)
      .then(deletedPerson => {
        setPersons(persons.filter(p => p.id !== id))
      })
      .catch(err => console.log(err))
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) 
    setPersons(filteredPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        value={filter} 
        onChange={handleFilterChange}
      />
      <PersonForm 
        onSubmit={handleFormSubmission} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <List persons={persons} handleDelete={handleDelete}/>
    </div>
  )
}

export default App