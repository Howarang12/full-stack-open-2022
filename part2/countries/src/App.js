import {useState, useEffect} from 'react'
import axios from 'axios'
import CountryInfo from './components/CountryInfo'
import CountryItem from './components/CountryItem'
import CountryForm from './components/CountryForm'

function App() {
  const [searchCountries, setSearchCountries] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(searchCountries.toLowerCase()))

    setFilteredCountries(filtered)
    console.log(filtered)
    if(searchCountries === '') {
      setFilteredCountries([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCountries])

  const handleSearchCountries = (e) => {
    setSearchCountries(e.target.value)
  } 
  
  return (
    <div className="App">
      <CountryForm value={searchCountries} onChange={handleSearchCountries} />

      {filteredCountries.length > 10 && <p>Too many matches, be more specific</p>}

      {filteredCountries.length > 1 && filteredCountries.length <10 && filteredCountries.map(country => <CountryItem country={country} />)}
      
      {filteredCountries.length === 1 && <CountryInfo country={filteredCountries[0]}/>}
    </div>
  );
}

export default App;
