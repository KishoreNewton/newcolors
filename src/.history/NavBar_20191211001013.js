import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import Select from '@material-ui/core/Select'
import "./NavBar.css"

class NavBar extends Component{
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
                    <Select></Select>
                </div>
            </header>
        )
    }
}

export default NavBar