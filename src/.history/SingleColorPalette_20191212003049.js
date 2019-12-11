import React, { Component } from 'react'

export default class SingleColorPalette extends Component {
    constructor(props){
        super(props)
        this.__shades = this.gatherShades(this.props)
    }
    gatherShades(){

    }
    render() {
        return (
        <div>
            <h1>Single Color Palette</h1>
        </div>
        )
    }
}
