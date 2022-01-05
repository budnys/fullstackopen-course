import { useState } from "react"

const Statistics = (props) => {
  const statistics = props.feedback;
  const hasFeedback = (statistics.good + statistics.neutral + statistics.bad) > 0;
  let content;
  if (hasFeedback) {
    content = <>
                <h1>Statistics</h1>
                <table style={{margin: '10px 0'}}>
                  {Object.keys(statistics).map((key, index) => {
                    return <StatisticLine key={index} text={key} value={statistics[key]} />
                  })}
                </table>
              </>;
  } else {
    content = <p>No feedback given</p>
  }

  return(
    <>
      {content}
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <tr style={{padding: '10px'}}>
      <td style={{margin: '5px'}}>{props.text}</td><td style={{margin: '5px'}}>{props.value}</td>
    </tr>
  )
}

const Button = (props) => {
  return (
    <>
      <button onClick={props.clickHandler}>
        {props.children}
      </button>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avrg, setAvrg] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleFeedback = (level) => {
    switch (level) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      default:
        return
    }

    setAll(all + 1)
    setAvrg( ((good - bad) / all) )
    setPositive( ((good / all) * 100))
  }
  
  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <Button clickHandler={() => handleFeedback('good')}>good</Button>
        <Button clickHandler={() => handleFeedback('neutral')}>neutral</Button>
        <Button clickHandler={() => handleFeedback('bad')}>bad</Button>
      </div>
      <div>
          <Statistics feedback={{good: good, neutral: neutral, bad: bad, all: all, avrg: avrg, positive: positive}} />
      </div>
    </>
  );
}

export default App;
