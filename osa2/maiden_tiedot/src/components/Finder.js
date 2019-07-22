import React from 'react'

const Finder = (props) => {
    return (
        <div>
            find countries: <input onChange={props.handleFilteringChange} />
        </div>
    )
}

export default Finder