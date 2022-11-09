import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const CountryInfo = ({country}) => {
  const [weather, setWeather] = useState({})
  const [temperature, setTemperature] = useState({})
  const [wind, setWind] = useState({})

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        setWeather({...response.data.weather[0]})
        setTemperature({...response.data.main})
        setWind({...response.data.wind})
        // console.log(response.data.weather[0])
      })
  }, [])

  const languages = []
  for (const language in country.languages) {
    languages.push(country.languages[language])
  }

  return (
    <div>
      <h1>{country.name.common}</h1> 
      <p>Capital: {country.capital[0] }</p>
      <p>Area: {country.area}</p>
      <h2>Languages</h2>
      <ul>
        {languages.map((language) => <li key={languages.indexOf(language)}>{language}</li>)}
      </ul>
      <img src={country.flags.png} alt='flag' />
      <Weather weather={weather} temperature={temperature} wind={wind}/>
    </div>
  )
}

export default CountryInfo