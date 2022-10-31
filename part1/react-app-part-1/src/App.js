import { Component } from "react"


function Header({course}) {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

// function Content({part1, exercises1, part2, exercises2, part3, exercises3}) {
//   return (
//     <div>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//     </div>
//   )
// }

function Part({part, exercises}) {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      {/* <Content course={course} part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/> */}
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}
export default App;
