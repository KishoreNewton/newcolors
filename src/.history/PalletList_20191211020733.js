import React, { Component } from 'react'

class PalletList extends Component {
  render() {
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


