import { useState } from "react";

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Display = ({value, text}) => (
    <p>{text} {value}</p>
)

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
    const handleClickGood = () => {
        setGood(good + 1);
    }

    const handelClickNeutral = () => {
        setNeutral(neutral + 1);
    }

    const handelClickBad = () => {
        setBad(bad + 1);
    }

    const all = good + neutral + bad;
    const average = (good -bad) / all;
    const positive = (good*100) / all + " %";

    return (
      <>
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleClickGood} text='good'/>
            <Button handleClick={handelClickNeutral} text='neutral'/>
            <Button handleClick={handelClickBad} text='bad'/>

            <h1>statistics</h1>

            <Display value={good} text='good'/>
            <Display value={neutral} text='neutral'/>
            <Display value={bad} text='bad'/>
            <Display value={all} text='all'/>
            <Display value={average} text='average'/>
            <Display value={positive} text='positive'/>
        </div>
      </>
    )
  }

export default App;