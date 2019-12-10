import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import Select from '@material-ui/core/Select'
import "./NavBar.css"
import { MenuItem, IconButton } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'

class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = { format: "hex", open: true }
        this.handleChange = this.handleChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }
    handleChange(evt){
        this.setState({format: evt.target.value})
        this.props.handleChange(evt.target.value)
    }
    closeSnackbar(){
        this.setState({ open: false })
    }
    render(){
        const { level, changeLevel } = this.props
        const { format } = this.state
        return(
            <header className="NavBar">
                <div className="logo">
                    <a href="#">BACK</a>
                </div>
                <div className="slider-container">
                <span>Strength {level}</span>
                <div className="slider">
                    <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                </div>
                </div>
                <div className="select-container">
                    <Select defaultValue={format} onChange={this.handleChange}  >
                        <MenuItem value="hex">Hex</MenuItem>
                        <MenuItem value="rgb">Rgb</MenuItem>
                        <MenuItem value="rgba">Rgba</MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "left"}} open={this.state.open} autoHideDuration={3000} message={<span id="message-id">Color Code Changed</span>}  ContentProps={{"aria-describedby": "message-id"}} action={[<IconButton onClick={this.closeSnackbar}> <CloseIcon /></IconButton>]} />
            </header>
        )
    }
}

export default NavBar