import React, { Component } from 'react'
import { Link } from "react-router-dom"
import MiniPalette from "./MiniPalette"
import { withStyles } from "@material-ui/styles"
import styles from "./styles/PaletteListStyles"
import { CSSTransition, TransitionGroup } from 'react-transition-group' 
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
                <Link to="/create-new-colors">
                  CREATE YOUR OWN
                </Link>
            </nav>
            <TransitionGroup className={classes.palettes}>
              {palettes.map(palette => (
                <CSSTransition key={palette.id} classNames='fade' timeout={3000}>
                  <MiniPalette {...palette}  handleClick={() => this.goToPalette(palette.id)} />
                </CSSTransition>  
              ))}
            </TransitionGroup>
            </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PalletList)


