import React, { Component } from 'react'
import "./ColorBox.css"
import { Link } from "react-router-dom"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import chroma from "chroma-js"
import { withStyles } from "@material-ui/styles"

const styles ={
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.35 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.35 ? "white" : "black"
    },
    seeMore: {
        background: props=> chroma(props.background).luminance() <= 0.35 ? "rgba(255, 255, 255, 0.3)" : "rgba(0,0,0,0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        color: props => chroma(props.background).luminance() <= 0.35 ? "white" : "black",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase",
    },
    copyButton: {
        width: "100px";
        height: "30px";
        position: "absolute";
        display: "inline-block";
        top: "50%";
        left: "50%";
        margin-left: "-50px";
        margin-top: "-15px";
        text-align: "center";
        outline: "none";
        background: "rgba(255, 255, 255, 0.3)";
        font-size: "1rem";
        lineHeight: "30px";
        color: "white";
        textTransform: "uppercase";
        border: "none";
        cursor: "pointer";
    }
}

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
        const { name, background, paletteId, id, moreUrl, showLink, classes } = this.props
        const { copied } = this.state
        const isDarkColor = chroma(background).luminance() <= 0.35
        const isLightColor = chroma(background).luminance() >= 0.35
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState} >
            <div className='ColorBox' style={{ background}}>
                <div className={`copy-overlay ${copied && "show"} `} style={{background}} />
                <div className={`copy-msg ${copied && "show"} `}>
                    <h1 className={isLightColor && "dark-text"}>copied</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span className={classes.colorName}>{ name }</span>
                    </div>
                    <button className={`copy-button ${isLightColor && "dark-text"}`}>COPY</button>
                </div>
                {showLink &&(
                <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                <span className={classes.seeMore}>MORE</span>
                </Link>
                )}
            </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox)