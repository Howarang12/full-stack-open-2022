import React from 'react'
const Filter = ({value, onChange}) => {

  return (
    <div>
      <label>Filter shown with </label>
      <input value={value} onChange={onChange}/>
    </div>
  )
}

export default Filter