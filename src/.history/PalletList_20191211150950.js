import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MiniPalette from "./MiniPalette"
import { withStyles } from "@material-ui/styles"

const styles = {
    root: {

        backgroundColor: "blue",
    }

}

class PalletList extends Component {
  render() {
    const {palettes, classes} = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}></div>
        <MiniPalette />
            {palettes.map(palette => (
                <MiniPalette {...palette} />
            ))}
      </div>
    )
  }
}

export default withStyles(styles)(PalletList)


