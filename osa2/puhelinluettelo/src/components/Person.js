import React from 'react'

const Person = ({name, number, handleDelete}) => (
    <div>
        <form onSubmit={handleDelete}>
            {name} {number}
            <button type="submit">delete</button>
        </form>
    </div>
)

export default Person