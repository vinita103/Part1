import React from 'react'

// Course info- Step 1

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
//       <Header course={course} />
//       <Content 
//       part1 = {part1}
//       part2 = {part2}
//       part3 = {part3}
//       exercises1 = {exercises1}
//       exercises2 = {exercises2}
//       exercises3 = {exercises3} />
      
// 		<Total 
//     exercises1 = {exercises1}
//     exercises2 = {exercises2}
//     exercises3 = {exercises3} /> 
//     </div>
//   )
// };

// const Header = (props) => {
// 	return (
// 		<div>
// 			<h1>{props.course}</h1>
// 		</div>
// 	)
// };

// const Content = (props) => {
// 	return (
// 		<div>
// 			<p>
// 				    {props.part1}: {props.exercises1}
// 			</p>
// 			<p>
// 				    {props.part2}: {props.exercises2}
// 			</p>
// 			<p>
// 				     {props.part3}: {props.exercises3}
// 			</p>
// 		</div>
// 	)
// };
	
// const Total = (props) => {
// 	return (
// 		<div>
// 			<p>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
// 		</div>
// 	)
// };	

// Course info: Step 2

// const App = () => {
//   const course = 'Half Stack application development'

//   return (
//   <div>
//     <Header course = {course} />
//     <Content />
//     <Total />
//   </div>
//   )
// };

// const Header = (props) => {
// 	return (
// 		<div>
// 			<h1>{props.course}</h1>
// 		</div>
// 	)
// };


// const Content = () => {
// 	const lists = PartLists.map(
// 		function(list) {
// 			return (
// 				<div>
// 					<Part part={list.part} exercises={list.exercises} />
// 				</div>
// 			)
// 		})
	
// 	return lists
// };

// const Part = (props) => {
// 	return (
// 		<div>
// 			<p>
// 				{props.part}: {props.exercises}
// 			</p>
// 		</div>
// 	)
// };

// const PartLists = [
// 	{
// 		id: 1,
// 		part: 'Fundamentals of React',
// 		exercises: 10
// 	},
// 	{
// 		id: 2,
// 		part: 'Using props to pass data',
// 		exercises: 7
// 	},
// 	{
// 		id: 3,
// 		part: 'State of a component',
// 		exercises: 14
// 	}
// ];

// const Total = () => {
// 	let  num = 0
	
// 	for (let i = 0; i < PartLists.length; i++) {
// 		num = num + PartLists[i].exercises
// 	}
	
// 	return (
// 		<div>
// 			<p>Number of exercises: {num}</p>
// 		</div>
// 	)
// };



// course information step3

// const App = () => {
// 	const course = 'Half Stack application development'
// 	const part1 = {
// 	  name: 'Fundamentals of React',
// 	  exercises: 10
// 	}
// 	const part2 = {
// 	  name: 'Using props to pass data',
// 	  exercises: 7
// 	}
// 	const part3 = {
// 	  name: 'State of a component',
// 	  exercises: 14
// 	}
  
// 	return (
// 	  <div>
// 		<h1>{course}</h1>
// 	      <p>{part1.name}: {part1.exercises}</p>
// 	      <p>{part2.name}: {part2.exercises}</p>
// 	       <p>{part3.name}: {part3.exercises}</p>
// 	       <p>Number of exercises: {part1.exercises + part2.exercises + part3.exercises}</p>
// 	  </div>
// 	)
//   }

// course information step4

const App = () => {
	const course = 'Half Stack application development'
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
		<Content parts={parts} />
		<Total parts={parts} />
			
	  </div>
	)
  };

  const Header = (props) => {
		return (
			<div>
				<h1>{props.course}</h1>
			</div>
		)
	};

	const Content = (props) => {
			const lists = props.parts.map(
				function(item) {
					return (
						<div>
							<p> {item.name}:{item.exercises}</p>
						</div>
					)
				})
			
			return lists
		};
		
		
		const Total = (props) => {
			let  num = 0
			
			const lists = props.parts.map(
				function(item) {

					num = num + item.exercises
				})
					
			return (
				<div>
					<p>Number of exercises: {num}</p>
				</div>
			)
		};


  export default App