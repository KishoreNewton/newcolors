import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import "./Palette.css"
import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

class Palette extends Component {
    render(){
        const colorBoxes = this.props.palette.colors[400].map(color => (
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