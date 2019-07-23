import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DetailedCountry = ({country}) => {

    const [ weather, setWeather ] = useState({})
    const baseUrl = 'http://api.apixu.com/v1/current.json?'
    const apiKey = '631e1fa5e6f4495fbcd170613192307'
    const url = `${baseUrl}key=${apiKey}&q=${country.capital.toLowerCase()}`

    useEffect(() => {
        axios.get(url)
            .then(response => setWeather(response.data))
    }, [])

    const showLanguages = () => country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)

    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
            <ul>
                {showLanguages()}
            </ul>
            <img src={country.flag} width="120" alt={"flag of " + country.name} />
            <h2>Weather in {country.capital}</h2>
            <b>temperature: </b> {weather.current.temp_c || 'loading'} Celsius
            <img src={weather.current.condition.icon || 'loading'} alt="weather icon" />
        
        </div>
    )
}

export default DetailedCountry