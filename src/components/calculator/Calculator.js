import React, { Component } from 'react'
import {Row} from 'react-bootstrap'
import './styles.css'
import Key from './Key'   //veronicas code uses an extra component

export class Calculator extends Component {
    render() {
        return (
            <>
                <Row>
                    <div className="window">0 </div>
                </Row>
                <Row>
                    <Key num="AC" bgc={true}/>
                    <Key num="+/-" bgc={true}/>
                    <Key num="%" bgc={true}/>
                    <Key num="x" bgc={true}/>
                </Row>
                <Row>
                    <Key num="7"/>
                    <Key num="8"/>
                    <Key num="9"/>
                    <Key num="x" bgc={true}/>
                </Row>
                <Row>
                    <Key num="4"/>
                    <Key num="5"/>
                    <Key num="6"/>
                    <Key num="-" bgc={true}/>
                </Row>
                <Row>
                    <Key num="1"/>
                    <Key num="2"/>
                    <Key num="3"/>
                    <Key num="+" bgc={true}/>
                </Row>

                <Row>
                    <Key num="0" zero={true}/>
                    <Key num="."/>
                    <Key num="="/>
                </Row>
            </>
        )
    }
}

export default Calculator

//                              MY UGLYASS CALCULATOR

// import React, { Component } from 'react'
// import {Container, Row, Col} from 'react-bootstrap'
// import './styles.css'

// export class Calculator extends Component {
//     render() {
//         return (
//         <Container>
//             <Row >
//                 <Col id="header" xs= "4">Header</Col>
//             </Row>
//             <Row >
//                 <Col className="num" xs = "1">7</Col>
//                 <Col className="num" xs= "1">8</Col>
//                 <Col className="num" xs= "1">9</Col>
//                 <Col className="num" xs = "1">+</Col>
//             </Row>
//             <Row >
//                 <Col className="num" xs= "1">4</Col>
//                 <Col className="num" xs= "1">5</Col>
//                 <Col className="num" xs= "1">6</Col>
//                 <Col className="num" xs= "1">-</Col>
//             </Row>
//             <Row >
//                 <Col className="num" xs= "1">1</Col>
//                 <Col className="num" xs= "1">2</Col>
//                 <Col className="num" xs= "1">3</Col>
//                 <Col className="num" xs= "1">x</Col>
//             </Row>
//             <Row >
//                 <Col className="num" xs= "1">0</Col>
//                 <Col className="num" xs= "1">.</Col>
//                 <Col className="num" xs= "1">=</Col>
//                 <Col className="num" xs= "1">/</Col>
            
//             </Row>
            
//         </Container>
//         )
//     }
// }

// export default Calculator
