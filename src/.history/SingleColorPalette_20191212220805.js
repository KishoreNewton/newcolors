import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import NavBar from './NavBar'
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/styles"
import styles from "./styles/PaletteStyles"

const styles = {
    Palette: {
        height: "100vh",
        display:  "flex",
        flexDirection: "column",
        overflow: 'hidden',
    },
    colors: {
        height: "94.5%",
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.9px",
        opacity: "1",
        backgroundColor: "white",
        "&a": {
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            background: "rgba(255, 255, 255, 0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            border: "none",
            cursor: "pointer",
        }
    }
}
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