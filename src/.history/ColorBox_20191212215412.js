import React, { Component } from 'react'
import "./ColorBox.css"
import { Link } from "react-router-dom"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import chroma from "chroma-js"
import { withStyles } from "@material-ui/styles"



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
        const { name, background, paletteId, id, moreUrl, showingFullPalette, classes } = this.props
        const { copied } = this.state
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState} >
            <div className={classes.ColorBox} style={{ background}}>
                <div className={`${classes.copyOverlay} ${copied && classes.showOverlay} `} style={{background}} />
                <div className={`${classes.copyMessage} ${copied && classes.showMessage} `}>
                    <h1 className={classes.colorName}>copied</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{ name }</span>
                    </div>
                    <button className={classes.copyButton}>COPY</button>
                </div>
                {showingFullPalette &&(
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