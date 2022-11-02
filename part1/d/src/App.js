import { useState } from 'react'

const Header = ({name}) => <h1>{name}</h1>

const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const Stat = ({text, value}) => {
  return(
      <tr>
        <td>
          {text} {value}
        </td>
      </tr>
  )
}

const Statistics = ({clicks}) => {
  const total = clicks.good + clicks.bad + clicks.neutral 
  const average = (clicks.good - clicks.bad) / total
  const positive = clicks.good / total * 100

  return(
    <div>
       {total === 0 ? 
       <p>No feedback given</p> :
        <table>
          <tbody>
            <Stat text='good' value={clicks.good}/>
            <Stat text='neutral' value={clicks.neutral}/>
            <Stat text='bad' value={clicks.bad}/>
            <Stat text='all' value={total}/>
            <Stat text='average' value={average}/>
            <Stat text='postive' value={positive + '%'} />
          </tbody>
        </table>
      }
    </div>
  )
  
}

const App = () => {
  // save clicks of each button to own state
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () =>
    setClicks({...clicks, good: clicks.good + 1})

  const handleNeutralClick = () =>
    setClicks({...clicks, neutral: clicks.neutral + 1})

  const handleBadClick = () =>
    setClicks({...clicks, bad: clicks.bad + 1})

  return (
    <div>
      <Header name='give feedback'/>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <Header name='statistics'/>
      <Statistics clicks={clicks} />
    </div>
  )
}

export default App