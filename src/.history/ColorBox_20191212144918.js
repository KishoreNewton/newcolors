import React, { Component } from 'react'
import "./ColorBox.css"
import { Link } from "react-router-dom"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import chroma from "chroma-js"

class ColorBox extends Component{
    constructor(props){
        super(props)
        this.state = { copied: false }
        this.changeCopyState = this.changeCopyState.bind(this)
    }
    changeCopyState(){
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }
    render(){
        const { name, background, paletteId, id, moreUrl, showLink } = this.props
        const { copied } = this.state
        const isDarkColor = chroma(background).luminance() <= 0.35
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState} >
            <div className='ColorBox' style={{ background}}>
                <div className={`copy-overlay ${copied && "show"} `} style={{background}} />
                <div className={`copy-msg ${copied && "show"} `}>
                    <h1>copied</h1>
                    <p>{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span className={isDarkColor && " light-text"}>{ name }</span>
                    </div>
                    <button className={`copy-button`}>COPY</button>
                </div>
                {showLink &&(
                <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                <span className="see-more">MORE</span>
                </Link>
                )}
            </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox