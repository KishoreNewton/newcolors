import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import "./Palette.css"
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

class Palette extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const colorBoxes = this.props.palette.colors[400].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return(
            <div className="Palette">
            <Slider />
                {/* NavBar goes Here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )}
}

export default Palette