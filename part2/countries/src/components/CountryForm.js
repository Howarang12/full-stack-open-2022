import React from 'react'

const CountryForm = ({value, onChange}) => {
  return (
    <form>
      <label>find countries </label>
      <input  value={value} onChange={onChange}/>
    </form>
  )
}

export default CountryForm