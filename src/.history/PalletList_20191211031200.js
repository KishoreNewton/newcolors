import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MiniPalette from "./MiniPalette"

class PalletList extends Component {
  render() {
    const {palettes} = this.props
    return (
      <div>
      <MiniPalette />
         {palettes.map(palette => (
             <MiniPalette {...palette} />
         ))}
      </div>
    )
  }
}

export default PalletList


