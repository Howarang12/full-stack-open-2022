import React from 'react'

const Person = ({name, number, id, handleDelete}) => {
  return (
    <div>
      <span> {name} {number} </span>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div> 
  )
}

export default Person