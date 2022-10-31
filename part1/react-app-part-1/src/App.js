import { Component } from "react"


function Header({course}) {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}


function Content({parts}) {
  return (
    <div>
      { parts.map(part => <Part part={part}/> )}
    </div>
  )
}

function Part({part}){
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

function Total({parts}) {
  return (
    <div>
      <p>Number of exercises {parts[0]['exercises'] + parts[1]['exercises'] + parts[2]['exercises'] }</p>
    </div>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
export default App;
