// //1ST STEP import react from the dependencies inside package.json
// import React, {Component} from 'react';
// //2ND you "app" name is the name of your component
// import Virus from './components/Virus';
// import data from './data/virus'


// class App extends Component{
//   render(){
//       let newDataSet = data.map((cdc, index)=>{
//           return <Virus num={cdc.numViruses} country={cdc.country} key={index} />
//       })
//     return(
//       <div>
//         {newDataSet}
//       </div>
//     )
//   }
// }

// export default App;



// function App(props){
//   //creating new data array
//   let newDataSet = data.map((cdcData)=>{
//     return <Virus num={cdcData.numViruses} country={cdcData.country} />
//   })
//   //BEFORE JSX IS RETURNED
//   return (
//     <div>{newDataSet}</div>
//   //   <div className="row">
//   //   {/* <App  name="Jesse" price={10.99}/> */}
//   //   <Virus virus={data[0].virus} country={data[0].country} num={data[0].numViruses} />
//   //   <Virus  country="jesse" num={data[1].numViruses} />
//   //   <Virus country={data[2].country} num={data[2].numViruses} />
//   //   <Virus  country={data[3].country} num={data[3].numViruses} />
//   //   <Virus country={data[4].country} num={data[4].numViruses} />
//   // </div>
//     )
// }
// // exporting a component named app
// export default App;



/////                                   REACT TUESDAY EXERCISES



//                                          CREATE A LIST 
// import React, {Component} from 'react';

// import SimpleList from './components/simpleList';



// class App extends Component{
//   render(){
//       return(
//        <SimpleList />
//       )
//   }
// }

// export default App;


//******************************************** */ DROP DOWN
// import React, { Component } from 'react';

// import SimpleDropDown from './components/SimpleDropDown'

// let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* Our App
//         <br /> */}
//         {/* <Parent /> */}
//         {/* <SimpleList /> */}
//         <SimpleDropDown days={daysOfWeek} />
//       </div>
//     )
//   }
// }
// export default App


//******************************************* BOOTSTRAP */
// import React, { Component } from 'react'
// import {Container, Row, Col} from 'react-bootstrap'
// import BootStrapDropDown from './components/BootStrapDropDown'
// import Calculator from './components/calculator/Calculator'

// let daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] 
// export class App extends Component {
//   render() {
//     return (
//       // <Container fluid>
//       //   <Row>
//       //     <Col md={{span:4, offset:4}}>
//       //       <BootStrapDropDown days = {daysOfWeek} />
//       //     </Col>
//       //   </Row>
//       // </Container>
//       <Container fluid>
//       <Row>
//         <Col md={{offset:4}}>
//           <Calculator />
//         </Col>
//       </Row>
//     </Container>
    
//     )
//   }
// }

// export default App


//////************************************MEDIA PAGE USING REACT */
import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Comments from './components/comments/Comments'

export class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={{span:4, offset:4}}>
            <Comments />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
