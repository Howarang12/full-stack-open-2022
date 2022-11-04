import React from 'react'
import Part from './Part'

const Course = ({course}) => {
  const total = course.parts.reduce((a, c) => a + c.exercises, 0)

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map(part => 
        <Part key={part.id} part={part}/>
      )}  
      <h3>total of {total} exercises</h3>
    </div>
  )
}

export default Course