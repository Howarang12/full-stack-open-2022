import React from 'react'
import Person from './Person'

const List = ({persons}) => {
  return (
    <div>
      {persons.map(person => 
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

export default List