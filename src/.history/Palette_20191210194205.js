import React, { Component } from 'react'
import ColorBox form "./ColorBox"

class Palette extends Component {
    render(){
        const colorBoxes = this.props.colors.map(color => (
            
        ))
        return(
            <div className="Palette">
                {/* NavBar goes Here */}
                <div className="Palette-colors">
                    {/* Bunch of color Boxes*/}
                </div>
            </div>
        )}
}

export default Palette