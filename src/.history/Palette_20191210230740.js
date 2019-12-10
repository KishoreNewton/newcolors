import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import "./Palette.css"

class Palette extends Component {
    render(){
        const colorBoxes = this.props.palette.colors[900].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return(
            <div className="Palette">
                {/* NavBar goes Here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )}
}

export default Palette