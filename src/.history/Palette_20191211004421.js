import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import "./Palette.css"
import NavBar from "./NavBar"

class Palette extends Component {
    constructor(props){
        super(props)
        this.state = { level: 400 }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this
    }
    changeLevel(level){
        this.setState({ level })
    }
    changeFormat(evt){
        alert(evt.target.value)
    }
    render(){
        const { colors } = this.props.palette
        const {level} = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return(
            <div className="Palette">
            <NavBar level={level} changeLevel={this.changeLevel} />
                {/* NavBar goes Here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )}
}

export default Palette