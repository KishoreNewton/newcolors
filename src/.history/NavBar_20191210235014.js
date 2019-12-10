import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import "./NavBar.css"

class NavBar extends Component{
    render(){
        const { level, changeLevel } = this.props
        return(
            <header className="Navbar">
                <div className="logo">
                    <a href="#">BACK</a>
                </div>
                <div className="slider-container">
                <span>Strength {level}</span>
                <div className="slider">
                    <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                </div>
                </div>
                
            </header>
        )
    }
}

export default NavBar