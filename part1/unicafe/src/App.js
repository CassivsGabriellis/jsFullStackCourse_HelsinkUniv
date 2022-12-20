import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ value, text }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td style={{ padding: "10px" }}>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <p>No feedback given.</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <Display value={props.good} text="Good" />
      <Display value={props.neutral} text="Neutral" />
      <Display value={props.bad} text="Bad" />
      <Display value={props.all} text="All" />
      <Display value={props.average} text="Average" />
      <Display value={props.positive} text="Positive" />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handelClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handelClickBad = () => {
    setBad(bad + 1);
  };

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good * 100) / all + " %";

  return (
    <div>
      <h1>Give feedback!</h1>
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handelClickNeutral} text="neutral" />
      <Button handleClick={handelClickBad} text="bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
