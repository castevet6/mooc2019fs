import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// komponentti nappia varten
const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(props.votes);

  // tapahtumakäsittelijät

  // 'next anecdote' painettu
  const handleNextAnecdote = () => setSelected(Math.floor(props.anecdotes.length * Math.random()))
  // 'vote' painettu

  const handleVote = () => {
      const copy = [...votes];
      copy[selected]++;
      setVotes(copy);
  }

  return (
    <div>
        <p>
            {props.anecdotes[selected]} 
        </p>
        <p>
            has {votes[selected]} votes
        </p>
        <Button handleClick={handleVote} text='vote' />
        <Button handleClick={handleNextAnecdote} text='next anecdote' />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const votes = new Array(anecdotes.length).fill(0);

ReactDOM.render(
  <App anecdotes={anecdotes} votes={votes} />,
  document.getElementById('root')
)