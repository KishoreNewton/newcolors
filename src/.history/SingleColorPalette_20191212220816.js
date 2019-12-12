import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import NavBar from './NavBar'
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/styles"
import styles from "./styles/PaletteStyles"

class SingleColorPalette extends Component {
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
        const { classes } = this.props
        const colorBoxes = this.__shades.map(color => (
            <ColorBox key={color.name} name={color.name} background={color[format]} showingFullPalette={false} />
        ))
        return (
        <div className={classes.Palette}>
            <NavBar handleChange={this.changeFormat} showingAllColors={false} backButton={true} />
            <div className={classes.colors}>{colorBoxes}
                <div className={classes.goBack}>
                    <Link className="back-button" to={`/palette/${id}`}>Go Back</Link>
                </div>
            </div>
        </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette)