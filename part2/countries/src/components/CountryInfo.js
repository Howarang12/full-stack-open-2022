import React from 'react'

const CountryInfo = ({country}) => {

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
    </div>
  )
}

export default CountryInfo