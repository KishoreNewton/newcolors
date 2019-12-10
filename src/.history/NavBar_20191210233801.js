import React, { Component } from 'react'

class NavBar extends Component{
    render(){
        return(
            <header className="Navbar">
                <div className="logo">
                    <a href="#">BACK</a>
                </div>
                <div className="slider">
                <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.changeLevel} />
            </div>
            </header>
        )
    }
}