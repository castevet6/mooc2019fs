import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
    const [ persons, setPersons] = useState([
        { name: 'Arto Hellas' },
        { name: 'Ada Lovelace' },
    ]) 
    const [ newName, setNewName ] = useState('')

    const handleNewPerson = (event) => {
        event.preventDefault()
        
        // tarkastetaan onko nimi jo persons-taulukossa
        if (persons.filter(p => p.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        const personObj = {
            name: newName
        }
        setPersons(persons.concat(personObj))
        setNewName('')
    }

    const handleNewName = (event) => {
        setNewName(event.target.value)
    }

    const showPersons = () => persons.map(person =>
        <Person key={person.name} name={person.name} />
    )

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleNewPerson}>
                <div>
                    name: <input onChange={handleNewName} value={newName} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {showPersons()}
        </div>
    )

}

export default App