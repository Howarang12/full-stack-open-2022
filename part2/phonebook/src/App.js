import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '123-456-7890'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  

  const handleClick = (e) => {
    e.preventDefault()
    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons([...persons, {name: newName, number: number}])
      setNewName('')
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
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
      {persons.map(person => 
        <Person name={person.name} number={person.number}/>
      )}
    </div>
  )
}

export default App