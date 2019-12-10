import React, { Component } from 'react'
import { Link } from "react-router-dom"

class PalletList extends Component {
  render() {
    const {palettes} = this.props
    return (
      <div>
         {palettes.map(palette => (
             <Link to="/palette"></Link>
         ))}
      </div>
    )
  }
}

export default PalletList


