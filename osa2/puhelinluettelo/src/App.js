import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')
    const [ filtering, setNewFiltering ] = useState('')

    useEffect(() => {
        console.log('effect started in App.js');
        axios.get('http://localhost:3001/persons')
            .then(response => {
                console.log('Promise fulfilled');
                setPersons(response.data);
            })
    }, [])
    console.log('rendered', persons.length,'persons')
    
    const handleNewPerson = (event) => {
        event.preventDefault()
        if (persons.filter(p => p.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const personObj = {
                name: newName,
                number: newNumber
            }
            axios.post('http://localhost:3001/persons', personObj)
            .then(response => {
                setPersons(persons.concat(personObj))    
                setNewName('')
                setNewNumber('')
            })
        }
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
            <Filter handleFilteringChange={handleFilteringChange} />
            <h2>add a new</h2>
            <PersonForm
                handleSubmit={handleNewPerson}
                handleOnChangeName={handleNewName}
                valueName={newName}
                handleOnChangeNumber={handleNewNumber}
                valueNumber={newNumber}
            />
            <h2>Numbers</h2>
            {showPersons()}
        </div>
    )

}

export default App