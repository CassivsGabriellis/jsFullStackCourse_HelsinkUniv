// const Header = (props) => {
//   return (
//     <>
//       <h1>{props.course}</h1>
//     </>
//   )
// }

// // const Part = (props) => {
// //   return (
// //     <>
      
// //     </>
// //   )
// // }

// const Content = (props) => {
//   return (
//     <>
//       <h2>{props.part1}, which has {props.exercises1} exercises.</h2>
//       <h2>{props.part2}, which has {props.exercises2} exercises.</h2>
//       <h2>{props.part3}, which has {props.exercises3} exercises.</h2>
//     </>
//   )
// }

// const Total = (props) => {
//   return (
//     <>
//       <p>Number of exercises: {props.totalNumber} exercises.</p>
//     </>
//   )

// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
    
//     <div>
//         <Header course={course} />
//         <Content part1={part1} exercises1={exercises1}
//                   part2={part2} exercises2={exercises2}
//                   part3={part3} exercises3={exercises3}/>
//         <Total totalNumber={exercises1 + exercises2 + exercises3}/>
//     </div>
    
//   )
// }

// const App = () => {
//   const [ counter, setCounter] = useState(0);

//   const increaseByOne = () => setCounter(counter + 1);
//   const decreaseByOne = () => setCounter(counter - 1);
//   const setToZero = () => setCounter(0);

//   // const handleClick = () => {
//   //   console.log('clicked');
//   // }

//   const Display = ({ counter }) => <div>{counter}</div>

//   const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

//   return (
//     <>
//       <Display counter={counter}/>
//       <Button 
//         onClick={increaseByOne}
//         text="plus"
//       />
//       <Button 
//         onClick={setToZero}
//         text="reset"
//       />
//       <Button 
//         onClick={decreaseByOne}
//         text="minus"
//       />
//     </>
//   )
// }

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// const Display = (props) => <div>{props.value}</div>

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }

//   return (
//     <div>
//       <Display value={value} />
//       <Button handleClick={() => setToValue(1000)} text="thousand" />
//       <Button handleClick={() => setToValue(0)} text="reset" />
//       <Button handleClick={() => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }

