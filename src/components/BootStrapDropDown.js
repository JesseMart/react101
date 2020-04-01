import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'

export class BootStrapDropDown extends Component {
    constructor(prop){
        super(prop)
    }
    render() {
        let optionList = this.props.days.map((day, index) => {
            return <Dropdown.Item key={index}>{day}</Dropdown.Item>
        })
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {optionList}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default BootStrapDropDown
