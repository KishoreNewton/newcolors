import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

class NavBar extends Component{
    render(){
        const { level, changeLevel } = this.props
        return(
            <header className="Navbar">
                <div className="logo">
                    <a href="#">BACK</a>
                </div>
                <div className="slider-container">


                </div>
                
            </header>
        )
    }
}

export default NavBar