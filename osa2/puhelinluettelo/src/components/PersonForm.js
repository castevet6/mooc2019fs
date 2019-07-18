import React from 'react'

const PersonForm = (props) => {
    const { handleSubmit,handleOnChangeName, valueName, handleOnChangeNumber, valueNumber, } = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input onChange={handleOnChangeName} value={valueName} />
            </div>
            <div>
                number: <input onChange={handleOnChangeNumber} value={valueNumber} type="tel"/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form> 
    )
}

export default PersonForm