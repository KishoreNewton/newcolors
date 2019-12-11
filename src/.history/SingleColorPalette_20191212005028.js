import React, { Component } from 'react'
import ColorBox from "./ColorBox"

export default class SingleColorPalette extends Component {
    constructor(props){
        super(props)
        this.__shades = this.gatherShades(this.props.palette, this.props.colorId)
    }
    gatherShades(palette, colorToFilterBy){
        let shad = []
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
            <ColorBox key={color.id} name={color.name} background={color.hex} showLink={false} />
        ))
        return (
        <div className="Palette">
            <div className="Palette-colors">{colorBoxes}</div>
        </div>
        )
    }
}
