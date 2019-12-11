import React, { Component } from 'react'

class PalletList extends Component {
  render() {
    return (
        const {palettes} = this.props
      <div>
         {palettes.map(palette => (
             <h1>{palette.paletteName}</h1>
         ))}
      </div>
    )
  }
}

export default PalletList

