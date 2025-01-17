import React, { Component } from 'react'
import "./ColorBox.css"
import {CopyToClipboard} from 'react-copy-to-clipboard'

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
        const { name, background } = this.props
        const { copied } = this.state
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState} >
            <div className='ColorBox' style={{ background}}>
                <div className={`copy-overlay ${copied && "show"} `} style={{background}} />
                <div className="copy-msg">
                    <h1>{}</h1>
                </div>
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