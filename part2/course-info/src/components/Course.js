import React from 'react'
import Name from './Name'
import Part from './Part'
import Total from './Total'

const Course = ({course}) => {
  const total = course.parts.reduce((a, c) => a + c.exercises, 0)

  return (
    <div>
      <Name name={course.name} />
      {course.parts.map(part => 
        <Part key={part.id} part={part}/>
      )}  
      <Total total={total} />
    </div>
  )
}

export default Course