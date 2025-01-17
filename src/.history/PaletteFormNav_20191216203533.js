import React, { Component } from 'react'
import classNames from 'classnames'
import PaletteMetaForm from "./PaletteMetaForm"
import {Link} from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Button } from '@material-ui/core' 
import styles from "./styles/PaletteFormNavStyles"

class PaletteFormNav extends Component {
    constructor(props){
        super(props)
        this.state = {newPaletteName: "", formShowing: false}
        this.handleChange = this.handleChange.bind(this)
        this.showForm = this.showForm.bind(this)
        this.hideForm = this.hideForm.bind(this)
    }
    
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    showForm(){
        this.setState({formShowing: true})
    }
    hideForm(){
        this.setState({formShowing: false})
    }
  render() {
      const { classes, open, palettes, handleSubmit } = this.props
      const {newPaletteName} = this.state 
    return (
      <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            color="default"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.props.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                CREATE YOUR OWN
              </Typography>
            </Toolbar>
            <div className={classes.navBtns}>
              
             <Link to="/" className={classes.link}>BACK</Link>
             <Button variant="contained" color="primary" onClick={this.showForm} className={classes.button}>
              SAVE PALETTE
            </Button>
             </div>
          </AppBar>
          {this.state.formShowing && ( <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm} /> )}
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav)