import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import { Link } from "react-router-dom"
import Select from '@material-ui/core/Select'
import "./NavBar.css"
import { MenuItem, IconButton } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'

class NavBar extends Component{
    constructor(props){
        super(props)
        this.state = { format: "hex", open: false }
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }
    handleFormatChange(evt){
        this.setState({format: evt.target.value, open: true})
        this.props.handleChange(evt.target.value)
    }
    closeSnackbar(){
        this.setState({ open: false })
    }
    render(){
        const { level, changeLevel,showingAllColors } = this.props
        const { format } = this.state
        return(
            <header className="NavBar">
                <div className="logo">
                    <Link to='/'>
                    if(this.props.showingColors){
                        logo = <div>
                                    <Link to="/">BACK</Link>
                            </div>
                    } else {
                        logo = <div>
                                    <Link to="/">MAIN</Link>
                            </div>
                    }
                    </Link>
                </div>
                {showingAllColors && (
                    <div className="slider-container">
                    <span>Strength {level}</span>
                    <div className="slider">
                        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                    </div> 
                    </div>
                )}
                <div className="select-container">
                    <Select defaultValue={format} onChange={this.handleFormatChange}  >
                        <MenuItem value="hex">Hex</MenuItem>
                        <MenuItem value="rgb">Rgb</MenuItem>
                        <MenuItem value="rgba">Rgba</MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "left"}} open={this.state.open} autoHideDuration={3000} message={<span id="message-id">Color Code Changed {format.toUpperCase()}</span>}  ContentProps={{"aria-describedby": "message-id"}} onClose={this.closeSnackbar} action={[<IconButton onClick={this.closeSnackbar} color='inherit' key="close" aria-label='close'> <CloseIcon /></IconButton>]} />
            </header>
        )
    }
}

export default NavBar