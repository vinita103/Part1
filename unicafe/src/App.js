
import './App.css';
import React, { useState } from 'react'

// 1.6: unicafe step1

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//      <h1 >Please give your feedback </h1>
//      <button onClick={()=>{setGood(good + 1)}}> Good</button>
//      <button onClick={()=>{setNeutral(neutral + 1)}}> Neutral</button>
//      <button onClick={()=>{setBad(bad + 1)}}> Bad</button>
//      <h2>Statistics</h2>
//      <h3>Good:{good}</h3>
//      <h3>Neutral:{neutral}</h3> 
//      <h3>Bad:{bad}</h3>
     
//     </div>
//   )
// }

// 1.7: unicafe step2

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//    const all= good+ neutral+bad

//   return (
//     <div>
//      <h1  >Please give your feedback </h1>
//      <button onClick={()=>{setGood(good + 1)}}> Good</button>
//      <button onClick={()=>{setNeutral(neutral + 1)}}> Neutral</button>
//      <button onClick={()=>{setBad(bad + 1)}}> Bad</button>
//      <h2 >Statistics</h2>
//      <h3>Good:{good}</h3>
//      <h3>Neutral:{neutral}</h3> 
//      <h3>Bad:{bad}</h3>
//      <h3>All:{all}</h3>
//      <h3>Average:{(good-bad)/all}</h3>
//      <h3>Positive:{(good)*100/all }%</h3>
          
//     </div>
//   )
// }

// 1.8: unicafe step3

// a proper place to define a component
// do not define a component within another component
    

// const Statistics = (props) => {

//   return(
//   <div>
//    <h3>Good:{props.good}</h3>
//    <h3>Neutral:{props.neutral}</h3> 
//    <h3>Bad:{props.bad}</h3>
//    <h3>All:{props.all}</h3>
//    <h3>Average:{props.average}</h3>
//    <h3>Positive:{props.positive}%</h3>
//    </div>
//   )
// }


// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const all = good+ neutral+bad
//   const average = (good-bad)/all
//   const positive = (good)*100/all

//   return (
//     <div>
//      <h1  >Please give your feedback </h1>
//      <button onClick={()=>{setGood(good + 1)}}> Good</button>
//      <button onClick={()=>{setNeutral(neutral + 1)}}> Neutral</button>
//      <button onClick={()=>{setBad(bad + 1)}}> Bad</button>
//      <h2> Statistics</h2>
//      <Statistics
//           good = {good}
//           neutral={neutral}
//           bad ={bad}
//           all={all}
//           average={average}
//           positive={positive}
          
//     />
//       </div>
//   )
// }
          
// 1.9 Unicafe Step 4 

// const Statistics = (props) => {
//   console.log(props.all);
//    if (props.all===0){
//      return (   
//      <h2 >"No Feedback Given" </h2>
//         )
//    }

//   return(
//   <div>
//    <h3>Good:{props.good}</h3>
//    <h3>Neutral:{props.neutral}</h3> 
//    <h3>Bad:{props.bad}</h3>
//    <h3>All:{props.all}</h3>
//    <h3>Average:{props.average}</h3>
//    <h3>Positive:{props.positive}%</h3>
//    </div>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const all = good+ neutral+bad
//   const average = (good-bad)/all
//   const positive = (good)*100/all
//   return (
//     <div>
//      <h1  >Please give your feedback </h1>
//      <button onClick={()=>{setGood(good + 1)}}> Good</button>
//      <button onClick={()=>{setNeutral(neutral + 1)}}> Neutral</button>
//      <button onClick={()=>{setBad(bad + 1)}}> Bad</button>
//      <h2> Statistics</h2>
//      <Statistics
//           good = {good}
//           neutral={neutral}
//           bad ={bad}
//           all={all}
//           average={average}
//           positive={positive}
          
//     />
//       </div>
//   )
// }
 
// 1.10: unicafe step5

// const StatisticLine =({text,value})  => {

//   return (
 
//     <div>
//        {text} {value}
  
//   </div>

//   )
// }

// const Statistics = (props) => {

//   if (props.all===0){
//     return (
     
//     <h2 >"No Feedback Given" </h2>
//        )
//   }
 
//   return(
//     <div>
//       <StatisticLine text="good" value ={props.good} />
//       <StatisticLine text="neutral" value ={props.neutral} />
//       <StatisticLine text="bad" value ={props.bad} />
//       <StatisticLine text="all" value ={props.all} />
//       <StatisticLine text="average" value ={props.average} />
//       <StatisticLine text="positive" value ={props.positive} />
//     </div>
//   )
// }


// const Button = (props) => {
//   return (
//     <div>
//      <button onClick={()=>{props.setGood(props.good + 1)}}> Good</button>
//      <button onClick={()=>{props.setNeutral(props.neutral + 1)}}> Neutral</button>
//      <button onClick={()=>{props.setBad(props.bad + 1)}}> Bad</button>
//     </div>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const all = good+ neutral+bad
//   const average = (good-bad)/all
//   const positive = (good)*100/all

//   return (
//     <div>
//      <h1  >Please give your feedback </h1>
//      <Button 
//           setGood = {setGood}
//           setNeutral ={setNeutral}
//           setBad =  {setBad}
//           good = {good}
//           neutral={neutral}
//           bad ={bad}
//     />
//      <h2> Statistics</h2>
//      <Statistics
//           good = {good}
//           neutral={neutral}
//           bad ={bad}
//           all={all}
//           average={average}
//           positive={positive}
          
//     />
//       </div>
//   )
// }
 
// 1.11*: unicafe step6

const StatisticLine =({text,value})  => {

  return (
 
    <tr>
      <td> {text} </td>
        <td>{value} </td>
  
  </tr>

  );
};

const Statistics = (props) => {

  if (props.all===0){
    return (
     
    <h2 >"No Feedback Given" </h2>
       )
  }
 
  return(
    <div>
      <table>
        <tbody>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.all} />
      <StatisticLine text="average" value ={props.average} />
      <StatisticLine text="positive" value ={props.positive + ' % '} />
      </tbody>
      </table>
    </div>
  )
}


const Button = (props) => {
  return (
    <div>
     <button onClick={()=>{props.setGood(props.good + 1)}}> Good</button>
     <button onClick={()=>{props.setNeutral(props.neutral + 1)}}> Neutral</button>
     <button onClick={()=>{props.setBad(props.bad + 1)}}> Bad</button>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+ neutral+bad
  const average = Math.round((good-bad)/all)
  const positive = Math.round((good)*100/all)
  return (
    <div>
     <h1  >Please give your feedback </h1>
     <Button 
          setGood = {setGood}
          setNeutral ={setNeutral}
          setBad =  {setBad}
          good = {good}
          neutral={neutral}
          bad ={bad}
    />
     <h2> Statistics</h2>
     <Statistics
          good = {good}
          neutral={neutral}
          bad ={bad}
          all={all}
          average={average}
          positive={positive}
          
    />
      </div>
  )
}
 

export default App