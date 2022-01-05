import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
};

const Part = (props) => {
  return (
    <>
      <p>{props.name} - {props.numExercises}</p>
    </>
  )
}

const Content = (props) => {
    return (
    <>
      {props.parts.map( (part, index) => { 
          return <Part name={part.name} numExercises={part.numExercises} key={index} />
        })
      }
    </>
  )
}

const Total = (props) => {
  const sum = props.parts.reduce((sum, currentPart) => { return sum + currentPart.numExercises }, 0)
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [{
      name: "Fundamentals of React",
      numExercises: 10
    },
    {
      name: "Using props to pass data",
      numExercises: 7
    },
    {
      name: "State of a component",
      numExercises: 14
    }]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
