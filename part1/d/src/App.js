import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const Stat = ({text, value}) => {
  return(
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () =>{
    setGood(good + 1)
  }

  const neutralClick = () =>{
    setNeutral(neutral + 1)
  }

  const badClick = () =>{
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClick} text='good'/>
      <Button handleClick={neutralClick} text='neutral'/>
      <Button handleClick={badClick} text='bad'/>
      <h1>statistics</h1>
      <Stat text='good' value={good}/>
      <Stat text='neutral' value={neutral}/>
      <Stat text='bad' value={bad}/>
      <Stat text='all' value={good + neutral + bad}/>
      <Stat text='average' value={(good - bad) / (good + neutral + bad)}/>
      <Stat text='postive' value={good/ (good + neutral + bad)} /> 

    </div>
  )
}

export default App