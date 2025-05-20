import { useState } from "react";

const Statistic = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>No feedback given
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine name="good" value={good} />
      <StatisticLine name="neutral" value={neutral} />
      <StatisticLine name="bad" value={bad} />
      <StatisticLine name="all" value={total} />
      <StatisticLine name="average" value={average} />
      <StatisticLine name="positive" value={positive} />
    </div>
  );
};
const StatisticLine = (props) => (
  <div>
    {props.name} {props.value}
  </div>
);

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
