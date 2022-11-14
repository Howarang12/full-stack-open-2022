import React from 'react'

const NewNoteForm = ({onSubmit, value, onChange}) => {
  return (
    <form onSubmit={onSubmit}>
        <input 
          value={value} 
          onChange={onChange}
        />
        <button type="submit">save</button>
    </form>
  )
}

export default NewNoteForm