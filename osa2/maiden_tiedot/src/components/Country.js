import React from 'react'

const Country = ({country}) => {

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
        </div>
    )
}

export default Country