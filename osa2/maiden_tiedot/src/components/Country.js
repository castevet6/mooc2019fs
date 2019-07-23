import React from 'react'

const Country = (props) => {
    console.log("Country props", props)
    return (
        <div>
            {props.country.name} <button onClick={props.handleClick}>show</button>
        </div>
    )
}

export default Country