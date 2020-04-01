// import React, { Component } from 'react'

// class SimpleList extends Component {
//     render() {

//         //-------------CREATE A LIST OF DAYS OF THE DAYS EXERCISES
//         let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//         // let formattedDays = days.map((day, index)=>{
//         //     return <li key={index}>{day}<br /></li> 
//         // })
//         //-------------USING LI TAGS TO CREATE A BETTER LIST 
//         // let listItems = days.map((day, index)=>{
//         //     return <li key={index}>{day}</li>
//         // })
//         return (
//             <>
//                 {days.map((day, index)=>{
//                     return <li key={index}>{day}</li> //------JS IS ALLOWED INSIDE BUT ITS LIMITED (LOOPS THAT USE CURLY BRACES WILL CONFUSE THE JSX)
//                 })}
//             </>
//         )
//     }
// }

// export default SimpleList;
