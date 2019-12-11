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
        <div className={classes.container}>
            <nav className={classes.nav}>
                <h1>MultiFormat Color</h1>
            </nav>
            <div className={classes.palettes}>
              
            </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PalletList)

