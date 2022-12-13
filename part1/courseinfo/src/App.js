const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <h2>{props.part1}, which has {props.exercises1} exercises.</h2>
      <h2>{props.part2}, which has {props.exercises2} exercises.</h2>
      <h2>{props.part3}, which has {props.exercises3} exercises.</h2>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises: {props.totalNumber} exercises.</p>
    </>
  )

}

const App = () => {
  const parts = [
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

  return (
    
    <div>
        <Header course={course} />
        <Content part1={part1} exercises1={exercises1}
                  part2={part2} exercises2={exercises2}
                  part3={part3} exercises3={exercises3}/>
        <Total totalNumber={exercises1 + exercises2 + exercises3}/>
    </div>
    
  )
}

export default App;