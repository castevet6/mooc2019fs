import React from 'react'

const Filter = ({handleFilteringChange}) => (
    <div>
        filter shown with: <input onChange={handleFilteringChange} />
    </div>
)

export default Filter