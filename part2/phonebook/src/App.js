import { useState } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import List from './components/List'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleFormSubmission = (e) => {
    e.preventDefault()
    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons([...persons, {name: newName, number: newNumber, id: persons.length + 1}])
      setNewName('')
      setNewNumber('')
    }
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
      {/* <input value={filter} onChange={(e) => setFilter(e.target.value)}/> */}
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
      <List persons={persons} />
    </div>
  )
}

export default App