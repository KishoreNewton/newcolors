import React, { Component } from 'react'

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


