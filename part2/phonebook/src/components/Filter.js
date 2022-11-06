import React from 'react'
import { useState } from 'react'
const Filter = ({value, onChange}) => {

  return (
    <div>
      <input value={value} onChange={onChange}/>
    </div>
  )
}

export default Filter