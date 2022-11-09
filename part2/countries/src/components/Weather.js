import React from 'react'

const Weather = ({weather, temperature, wind}) => {

  const tempC = temperature.temp - 273.15
  const tempF =(tempC * 9/5) + 32

  return (
    <div>
      <h1>Weather</h1>
      <p>temperature { tempC.toFixed(2) } °C or { tempF.toFixed(2) } °F</p>
      <div>
        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
        <p>{weather.description}</p>
      </div>
      <p>wind {wind.speed} m/s</p>
    </div>
  )
}

export default Weather