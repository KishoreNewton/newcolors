import React, { Component } from 'react'
import "./ColorBox.css"

class ColorBox extends Component{
    render(){
        return(
            <div className='ColorBox' style={{background: this.props.background}}>
                <div className="copy-container">
                    <div className="box-content">
                        <span></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ColorBox