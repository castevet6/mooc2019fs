import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Finder from './components/Finder'
import DetailedCountry from './components/DetailedCountry'
import Country from './components/Country'

const App = () => {
    const [countries, setCountries ] = useState([])
    const [findTerm, setFindTerm ] = useState('')

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => setCountries(response.data))
    }, [])

    const handleFilteringChange = (event) => {
        setFindTerm(event.target.value)
    }

    const filteredCountries = countries.filter(country => country.name.toLowerCase().startsWith(findTerm.toLowerCase()))

    const registerHandler = (name) => () => {
        setFindTerm(name);
    }

    const showCountries = () => filteredCountries.map(country => 
        <Country key={country.name} country={country} handleClick={registerHandler(country.name)}/>
    );
    
    if (filteredCountries.length > 1 && filteredCountries.length < 10) {
        return (
            <div>
                <Finder handleFilteringChange={handleFilteringChange} />
                {showCountries()}
            </div>
        )
    } else if (filteredCountries.length === 1) {
        return (
            <div>
                <Finder handleFilteringChange={handleFilteringChange} />
                <DetailedCountry country={filteredCountries[0]} />
            </div>
        )
    } else if (filteredCountries.length > 10) {
        return (
            <div>
                <Finder handleFilteringChange={handleFilteringChange} />
                Too many countries, specify another filter
            </div>
        )      
    } else {
        return (
            <div>
                <Finder handleFilteringChange={handleFilteringChange} />
                No countries for given search terms
            </div>
        )
    }
    



}

export default App