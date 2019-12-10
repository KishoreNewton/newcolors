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
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(evt){
        this.props.handleChange(evt.target.value)
        this.setState({format: evt.target.value})
    }
    render(){
        const { level, changeLevel, handleChange } = this.props
        const { format } = this.state
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
                    <Select onChange={handleChange} value={format} >
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