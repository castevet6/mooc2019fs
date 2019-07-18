import React from 'react'
import ReactDOM from 'react-dom'

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

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    }
    

    return (
        <div>
            <Course course={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))