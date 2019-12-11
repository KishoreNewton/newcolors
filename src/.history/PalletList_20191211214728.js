import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MiniPalette from "./MiniPalette"
import { withStyles } from "@material-ui/styles"

const styles = {
    root: {
        backgroundColor: "blue",
        height: "135vh !important",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        height: "100%",
        width: "70%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: 'wrap',
    },
    nav: {
      display: "flex",
      width: "100%",
      color: "white"
    },
    palettes: {
      boxSizing: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "5%"
    }

}

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
                  <MiniPalette {...palette}  handleClick />
              ))}
            </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PalletList)


