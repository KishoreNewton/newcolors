import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import "./Palette.css"
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

class Palette extends Component {
    constructor(props){
        super(props)
        this.state = { level: 400 }
        this.changeLevel = this.changeLevel.bind(this)
    }
    changeLevel(level){
        this.setState({ level })
    }
    render(){
        const { colors } = this.props.palette
        const {level} = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return(
            <div className="Palette">
            <div className="slider">
            <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={this.changeLevel} />
                {/* NavBar goes Here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )}
}

export default Palette