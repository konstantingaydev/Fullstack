const Header = (props) => {
  console.log('Header name is: '+props.name)
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}
const Part = (props) => {
    console.log('Content name is: '+props.name +' with this many exercises: '+props.count)
  return (
    <>
      <p>
        {props.name} {props.count}
      </p>
    </>
  )
}
const Content = (props) => {
  return (
    <>
      <Part name={props.name[0]} count={props.count[0]}/>
      <Part name={props.name[1]} count={props.count[1]}/>
      <Part name={props.name[2]} count={props.count[2]}/>
    </>
  )
}

const Total = (props) => {
  console.log('Total amount of exercises is: '+props.count)
  return (
    <>
      <p>
        Number of exercises {props.count}
      </p>
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content name={[part1, part2, part3]} count={[exercises1, exercises2, exercises3]}/>
      <Total count = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App