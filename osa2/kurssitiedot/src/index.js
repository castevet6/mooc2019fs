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

/*
const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
        </div>
    )
}

const Total = (props) => {
    return (
        <p>
            Number of exercises { props.total[0].exercises + props.total[1].exercises + props.total[2].exercises }
        </p>
    )
} */

const Course = ({course}) => {
    const { name, parts } = course

    const partRows = () => (
        parts.map(part => <Part key={part.id} part={part} />)
    )

    return (
        <div>
            <Header name={name} />
            {partRows()}
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