import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  

  const handleClick = (e) => {
    e.preventDefault()
    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons([...persons, {name: newName, number: number, id: persons.length + 1}])
      setNewName('')
    }
  }

  const filteredList = filter ? 
    persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) 
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <input value={filter} onChange={(e) => setFilter(e.target.value)}/>
      <form>
        <h3>Add a new person</h3>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={number} onChange={(e) => setNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredList.map(person => 
        <Person 
          key={person.id} 
          name={person.name} 
          number={person.number} 
          id={person.id}
        />
      )}
    </div>
  )
}

export default App