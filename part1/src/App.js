import { Component } from "react"


function Header({course}) {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

function Content({part1, exercises1, part2, exercises2, part3, exercises3}) {
  return (
    <div>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  )
}

function Part({part, exercises}) {
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  )
}

function Total({total}) {
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      {/* <Content course={course} part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/> */}
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
      <Total total={exercises1+exercises2+exercises3} />
    </div>
  )
}
export default App;
