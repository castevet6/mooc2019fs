import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/persons'
import './index.css'

const App = () => {
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')
    const [ filtering, setNewFiltering ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState(null)

    useEffect(() => {
        personService.getAll()
            .then(initialPersons => {
                setPersons(initialPersons);
            })
    }, [])

    const handleNewPerson = (event) => {
        event.preventDefault()
        if (persons.filter(p => p.name === newName).length > 0) {
            const id = persons.find(per => per.name === newName).id
            console.log("id", id)
            const updatePersonObj = {
                id: id,
                name: newName,
                number: newNumber
            }
            personService.updateUser(updatePersonObj)
                .then(response => {
                    setPersons(persons.map(per => per.id === id ? { ...per, number: updatePersonObj.number } : per))
                    setNewName('')
                    setNewNumber('')
                    setErrorMessage(`Updated ${newName} to phonebook`)
                    setTimeout(() => setErrorMessage(null), 5000)
                    return response
                })
                .catch(error => {
                    setErrorMessage("Person " + updatePersonObj.name + " was already deleted from server.");
                    setTimeout(() => setErrorMessage(null), 5000)
                    // Haetaan kaikki henkilöt jotta sivu rendautuu oikein virhetilan jälkeen
                    personService.getAll()
                    .then(persons => setPersons(persons))
                })
        } else {
            const personObj = {
                name: newName,
                number: newNumber
            }

            personService.create(personObj)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })
            setErrorMessage(`Added ${personObj.name} to phonebook`)
            setTimeout(() => setErrorMessage(null), 5000)
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


    // Handler for clicking delete button
    const handleDelete = (name) => {
        const id = persons.find(per => per.name === name).id
        personService.deleteUser(name, id)
            .then(setPersons(persons.filter(p => p.name !== name)))        
        setTimeout(() => setErrorMessage(null), 5000)
    }

    const filteredPersons = persons.filter(person => person.name.toLowerCase().startsWith(filtering.toLowerCase()))

    const showPersons = () => filteredPersons.map(person =>
        <Person key={person.name} name={person.name} number={person.number} handleDelete={() => handleDelete(person.name)} />
    )

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={errorMessage}/>
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