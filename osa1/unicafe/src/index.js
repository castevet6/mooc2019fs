import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// komponentti napille
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

// Display-komponentti joka esittää nimen ja arvon (esim. good 0)
const Display = ({ name, value }) => (
    <div>
        {name} {value}
    </div>
)

const App = () => {
    // tilat eri palautteille
    const [ good, setGood ] = useState(0)
    const [ neutral, setNeutral ] = useState(0)
    const [ bad, setBad ] = useState(0)

    // tapahtumakäsittelijät nappien painalluksille
    const handleGoodClick = () => setGood(good + 1)
    const handleNeutralClick = () => setNeutral(neutral + 1)
    const handleBadClick = () => setBad(bad + 1)

    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={handleGoodClick} text='good' />
            <Button handleClick={handleNeutralClick} text='neutral' />
            <Button handleClick={handleBadClick} text='bad' />
            <h1>Statistics</h1>
            <Display name='good' value={good} />
            <Display name='neutral' value={neutral} />
            <Display name='bad' value={bad} />
            <Display name='all' value={ good + neutral + bad } />
            <Display name='average' value={ (good - bad) / (good + neutral + bad) }  />
            <Display name='positive' value={ 100* (good / (good + neutral + bad)) + ' %' } />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));