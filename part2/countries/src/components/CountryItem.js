import React from 'react'
import { useState } from 'react'
import CountryInfo from './CountryInfo'

const CountryItem = ({country}) => {
  const [showInfo, setShowInfo ] = useState(false)

  const handleClick = () => {
    setShowInfo(!showInfo)
  }

  return (
    <div>
      <span>{country.name.common} </span>
      <button onClick={handleClick}>{showInfo ? 'hide' : 'show'}</button>
      {showInfo && <CountryInfo country={country} />}
    </div>
  )
}

export default CountryItem