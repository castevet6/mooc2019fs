import React from 'react'

const Header = ({name}) => {
    return (
        <h1>{name}</h1>
    )
}

const Part = ({ part }) => {
    const { name, exercises } = part
    return (
        <p>
            { name } { exercises }
        </p>
    )
}

const Total = ({total}) => {
    return (
        <div>
            <p>
                <b>total of { total } exercises</b>
            </p>
        </div>
    )
}

const Course = ({course}) => {
    const { name, parts } = course

    const partRows = () => (
        parts.map(part => <Part key={part.id} part={part} />)
    )

    const total = () => parts.reduce((acc, part) => acc + part.exercises, 0)

    return (
        <div>
            <Header name={name} />
            {partRows()}
            <Total total={total()} />
        </div>
    )
}

export default Course