import React, { Component } from 'react'
import { Link } from "react-router-dom"

class PalletList extends Component {
  render() {
    const {palettes} = this.props
    return (
      <div>
         {palettes.map(palette => (
             <h1>{palette.paletteName}</h1>
         ))}
      </div>
    )
  }
}

export default PalletList


