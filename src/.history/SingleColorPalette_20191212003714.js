import React, { Component } from 'react'
import ColorBox from "./ColorBox"

export default class SingleColorPalette extends Component {
    constructor(props){
        super(props)
        this.__shades = this.gatherShades(this.props.palette, this.props.colorId)
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
    render() {
        const colorBoxes = this.__shades.map(color => (
            <ColorBox key={color.id} name={color.name} color={color.hex} />
        ))
        return (
        <div>
            
        </div>
        )
    }
}
