import React, { Component } from 'react'
import "./ColorBox.css"
import 

class ColorBox extends Component{
    render(){
        const { name, background } = this.props
        return(
            <Cop
            <div className='ColorBox' style={{ background}}>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{ name }</span>
                    </div>
                    <button className="copy-button">COPY</button>
                </div>
                <span className="see-more">MORE</span>
            </div>
        )
    }
}

export default ColorBox