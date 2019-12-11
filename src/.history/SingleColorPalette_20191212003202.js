import React, { Component } from 'react'

export default class SingleColorPalette extends Component {
    constructor(props){
        super(props)
        this.__shades = this.gatherShades(this.props.palette, this.props.colorId)
    }
    gatherShades(palette, color){
        let shades = []
        let allColors = palette.colors
        for(let key in colors)

        return shades
    }
    render() {
        return (
        <div>
            <h1>Single Color Palette</h1>
        </div>
        )
    }
}
