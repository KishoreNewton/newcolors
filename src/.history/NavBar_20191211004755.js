import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import Select from '@material-ui/core/Select'
import "./NavBar.css"
import { MenuItem } from '@material-ui/core'

class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = { format: "hex" }
    }
    render(){
        const { level, changeLevel } = this.props
        return(
            <header className="NavBar">
                <div className="logo">
                    <a href="#">BACK</a>
                </div>
                <div className="slider-container">
                <span>Strength {level}</span>
                <div className="slider">
                    <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                </div>
                </div>
                <div className="select-container">
                    <Select onChange={this.props.handleChange} >
                        <MenuItem value="hex">Hex</MenuItem>
                        <MenuItem value="rgb">Rgb</MenuItem>
                        <MenuItem value="rgba">Rgba</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

export default NavBar