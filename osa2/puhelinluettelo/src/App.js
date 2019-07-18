import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
    const [ persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '112233'},
        { name: 'Ada Lovelace', number: '445566' },
        { name: 'Seppo Kumi', number: '99999' },

    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')
    const [ filtering, setNewFiltering ] = useState('')

    const handleNewPerson = (event) => {
        event.preventDefault()
        
        // tarkastetaan onko nimi jo persons-taulukossa
        if (persons.filter(p => p.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
            setNewName('')
            setNewNumber('')
            return
        }
        const personObj = {
            name: newName,
            number: newNumber
        }
        setPersons(persons.concat(personObj))
        setNewName('')
        setNewNumber('')
    }

    const handleNewName = (event) => {
        setNewName(event.target.value)
    }

    const handleNewNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilteringChange = (event) => {
        setNewFiltering(event.target.value)
    }

    const filteredPersons = persons.filter(person => person.name.toLowerCase().startsWith(filtering.toLowerCase()))
    const showPersons = () => filteredPersons.map(person =>
        <Person key={person.name} name={person.name} number={person.number} />
    )

    return (
        <div>
            <h2>Phonebook</h2>
                <div>
                    filter shown with: <input onChange={handleFilteringChange} />
                </div>
            <h2>add a new</h2>
            <form onSubmit={handleNewPerson}>
                <div>
                    name: <input onChange={handleNewName} value={newName} />
                </div>
                <div>
                    number: <input onChange={handleNewNumber} value={newNumber} />
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