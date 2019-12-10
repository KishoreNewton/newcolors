import React, { Component } from 'react'
import ColorBox from "./ColorBox"

class Palette extends Component {
    render(){
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color} />
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