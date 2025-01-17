import React, { Component } from 'react'
import "./ColorBox.css"
import {CopyToClipboard} from 'react-copy-to-clipboard'

class ColorBox extends Component{
    render(){
        const { name, background } = this.props
        return(
            <CopyToClipboard text= >
            <div className='ColorBox' style={{ background}}>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{ name }</span>
                    </div>
                    <button className="copy-button">COPY</button>
                </div>
                <span className="see-more">MORE</span>
            </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox