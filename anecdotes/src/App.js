
import './App.css';
import React, { useState } from 'react'

// 1.12*: anecdotes step1

// const App = () => {

//   const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
//   ]
   
//   const [selected, setSelected] = useState(0)

//   const changeanecdotes = () => {
//     setSelected(Math.floor(Math.random()*anecdotes.length))
//   }

//   return (
//     <div>
//        {anecdotes[selected]}
//        <br/>
//        <button onClick ={changeanecdotes}> next anecdotes</button>
//     </div>
//   )
// }

// 1.13*: anecdotes step2

// const App = () => {

//   const [selected, setSelected] = useState(0)

//   const[ vote, setvote] =useState([0,0,0,0,0])
	
//    const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
//   ]
    
//   const changeanecdotes = () => {
//     setSelected(Math.floor(Math.random()*anecdotes.length))
//   }

//   const voteChange = () => {

//      let copy = [...vote]
      
//     copy [selected]++

//     setvote(copy)

//   } 
//   return (
//     <div>
//        <h1>{anecdotes[selected]}</h1>
//        <h3> has {vote[selected]} Votes</h3>
//        <button onClick ={changeanecdotes}> next anecdotes</button>
//        <button onClick = {voteChange} >Vote</button>
//     </div>
//   )
// }

// 1.14*: anecdotes step3

const App = () => {

const [selected, setSelected] = useState(0)

const[ vote, setvote] =useState([0,0,0,0,0])
	
   const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
    
  const changeanecdotes = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const voteChange = () => {
  let copy = [...vote]      
   copy[selected]++
  setvote(copy)
  } 

  const highestVotes = Math.max(...vote);
  const MostVotedAnecdote = anecdotes[vote.indexOf(highestVotes)];

  return (
    <div>
      <h1>Anecdote of the day</h1>
       <h3>{anecdotes[selected]}</h3>
       <h3> has {vote[selected]} Votes</h3>
       <button onClick ={changeanecdotes}> next anecdotes</button>
       <button onClick = {voteChange} >Vote</button>
       <h1> Anecdote with most Votes</h1>
       <h3>{MostVotedAnecdote} </h3>
       <h3>{highestVotes}</h3>
       
    </div>
  )
}


export default App;
