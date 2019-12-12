import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import NavBar from './NavBar'
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/styles"

const styles = {
    Palette: {
        height: "100vh",
        display:  "flex",
        flexDirection: "column",
        overflow: 'hidden',
    },
    colors: {
        height: "95%",
    }
}
export default class SingleColorPalette extends Component {
    constructor(props){
        super(props)
        this.__shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = { format: "hex" }
        this.changeFormat = this.changeFormat.bind(this)
    }
    gatherShades(palette, colorToFilterBy){
        let shades = []
        let allColors = palette.colors
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            ) 
        }
        return shades.slice(1)
    }
    changeFormat(val){
        this.setState({ format: val })
    }
    render() {
        const { format } = this.state
        const { id } = this.props.palette
        const colorBoxes = this.__shades.map(color => (
            <ColorBox key={color.name} name={color.name} background={color[format]} showingFullPalette={false} />
        ))
        return (
        <div className="SingleColorPalette Palette">
            <NavBar handleChange={this.changeFormat} showingAllColors={false} backButton={true} />
            <div className="Palette-colors">{colorBoxes}
                <div className="go-back ColorBox">
                    <Link className="back-button" to={`/palette/${id}`}>Go Back</Link>
                </div>
            </div>
        </div>
        )
    }
}
