import React, { Component } from 'react'
import "./ColorBox.css"

class ColorBox extends Component{
    render(){
        const { name, background } = this.props
        return(
            <div className='ColorBox' style={{ background}}>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{ name }</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ColorBox