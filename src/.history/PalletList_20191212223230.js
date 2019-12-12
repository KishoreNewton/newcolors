import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MiniPalette from "./MiniPalette"
import { withStyles } from "@material-ui/styles"


class PalletList extends Component {
  goToPalette(id){
    this.props.history.push(`/palette/${id}`)
  }
  render() {
    const {palettes, classes} = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
            <nav className={classes.nav}>
                <h1>MultiFormat Color</h1>
            </nav>
            <div className={classes.palettes}>
              {palettes.map(palette => (
                  <MiniPalette {...palette}  handleClick={() => this.goToPalette(palette.id)} />
              ))}
            </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PalletList)


