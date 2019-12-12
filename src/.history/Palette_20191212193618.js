import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import "./Palette.css"
import NavBar from "./NavBar"
import { withStyles } from "@material-ui/styles"

const styles = {
    Palette: {
        height: "100vh",
        display:  "flex",
        flexDirection: "column",
    }
}

class Palette extends Component {
    constructor(props){
        super(props)
        this.state = { level: 400, format: "hex" }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }
    changeLevel(level){
        this.setState({ level })
    }
    changeFormat(val){
        this.setState({ format: val })
    }
    render(){
        const { colors, id, classes } = this.props.palette
        const {level, format} = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.id} moreUrl={`/palette/${id}/${color.id}`} showingFullPalette={true} />
        ))
        return(
            <div className={classes.Palette}>
            <NavBar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors />
                {/* NavBar goes Here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )}
}

export default withStyles(styles)(Palette)